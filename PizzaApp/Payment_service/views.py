from rest_framework.views import APIView
from rest_framework.response import Response
from paypalrestsdk import Payment
from django.conf import settings
from .paypal_utils import paypalrestsdk
from Cart.models import Cart, CartItem
from rest_framework import status


class CreatePayment(APIView):
    """Paypal view"""

    def post(self, request):
        """Checks out cart-item"""
        cart = Cart.objects.get(user=request.user)
        cart_item = CartItem.objects.filter(cart=cart)

        if not cart_item:
            return Response({
                'details': 'Not Found'
            }, status=404)
    
        items_list = []
        total_price = 0

        for item in cart_item:
            items_list.append(
                {
                    'name': item.pizza.name,
                    'sku': str(item.pizza.id),
                    'price': f'{ item.pizza.price }',
                    'currency': 'USD',
                    'quantity': item.quantity
                }
            )
            total_price += item.pizza.price * item.quantity

        payment = Payment(
            {
                'intent': 'sale',
                'payer': {
                    'payment_method': 'paypal'
                },
                'redirect_urls': {
                    'return_url': 'https://4b7f-197-210-78-79.ngrok-free.app/paypal/execute/',
                    'cancel_url': 'https://4b7f-197-210-78-79.ngrok-free.app/api/paypal/cancel/'
                },
                'transactions': [{
                    'amount': {
                        'total': f'{total_price:.2f}',
                        'currency': 'USD'
                    },
                    'description': 'Payment for item in the cart',
                    'item_list': {
                        'items': items_list
                    }
                }]
            }
        )

        if payment.create():
            approved_url = next(link['href'] for link in payment.links if link['rel'] == 'approval_url')
            return Response({
                'status': 'success',
                'approval_url': approved_url,

            }, status=200)

        else:
            return Response({
                'status': 'error',
                'error': payment.error
            }, status=400)


class Execute_payment(APIView):
    """Executes payment"""

    def get(self, request):
        """gets the payment details from the payment system"""

        payment_id = request.query_params.get('paymentId')
        payer_id = request.query_params.get('PAYID')

        if not payment_id or not payer_id:
            return Response({
                'status': 'error',
                'message': 'Missing parameters'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        payment = Payment.find(payment_id)

        if payment.state == 'approved':

            if payment.execute({'payer_id': payer_id}):
                return Response({
                    'status': 'success',
                    'message': 'Payment executed successfully'
                })
            
            else:
                return Response({
                    'status': 'error',
                    'message': 'Payment execution failed'
                }, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({"status": "error", "message": "Payment not approved"}, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
from rest_framework import status
from .paystack import Paystack
import hmac
import hashlib
from User.models import User
from order.models import Order, OrderItem
from Cart.models import CartItem, Cart
from django.shortcuts import redirect, render
import json
import requests


class InitializePaymentView(APIView):
    """
    View for creating payment
    """

    def post(self, request, *args, **kwargs):
        """Makes a post request to create the paymet"""

        email = request.data.get('email')
        amount = request.data.get('amount')

        if not email or not amount:
            return Response(
                {"email": "Email and amount are required"},
                status=status.HTTP_400_BAD_REQUEST
            )
        paystack = Paystack()

        response = paystack.initialize_payment(email=email, amount=amount)

        if response.get("status"):
            return Response(response['data'], status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": response.get('message' 'An error occured')},
                 status=status.HTTP_400_BAD_REQUEST
            )
        

class VerifyPaymentView(APIView):
    """Verify if payment was successful
    """

    def post(self, request, reference):
        """Makes a post request to verify the payment
        """

        paystack = Paystack()
        response = paystack.verify_payment(reference)

        if response.get("status"):
            return Response(response["data"], status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": response.get("message", "An error occurred.")},
                status=status.HTTP_400_BAD_REQUEST,
            )


class PaystackWebhookView(APIView):
    """
    Handle Paystack Webhook event
    """

    def post(self, request, *args, **kwargs):
        paystack_signature = request.headers.get('x-paystack-signature')

        if not paystack_signature:
            return Response({"error": "Signature missing"}, status=status.HTTP_400_BAD_REQUEST)

        payload = request.body
        secret_key = settings.PAYSTACK_SECRET_KEY.encode()

        expected_signature = hmac.new(
            secret_key, payload, hashlib.sha512
        ).hexdigest()

        if not hmac.compare_digest(expected_signature, paystack_signature):
            return Response("Invalid signature", status=status.HTTP_400_BAD_REQUEST)
        
        try:
            # process event
            event = json.loads(payload)

            if event.get('event') == 'charge.success':
                data = event['data']

                #process the payment
                # mark order as paid

                reference = data['reference']
                amount = data['amount'] / 100
                email = data['Customer']['email']
    
    
                user = User.objects.get(email=email)
                if not user:
                    return Response({"error": "User not found"},
                                status=status.HTTP_400_BAD_REQUEST)
                
                if Order.objects.filter(reference=reference).exists():
                    return Response({"error": "Order already processed"},
                                    status=status.HTTP_200_OK)

                # create order
                order = Order.objects.create(
                    user=user,
                    reference=reference,
                    total_amount=amount,
                    status="Paid"
                )

                # fetch user cartitems
                cart_items = CartItem.objects.filter(user=user)

                # create orderitem from cartItem
                for item in cart_items:
                    OrderItem.objects.create(
                        order=order,
                        pizza=item.pizza,
                        quantity=item.quantity,
                        price=item.pizza.price
                    )

                # clear cart_items from db
                cart_items.delete()
                return Response({"success": "Order successfully placed"}, status=status.HTTP_200_OK)
        
        except (KeyError, json.JSONDecodeError):
            return Response({"error": "Invalid payload structure"}, status=status.HTTP_400_BAD_REQUEST)


        # Handle other events (optional)
        return Response({"status": "ignored"}, status=status.HTTP_200_OK)
    

class CheckoutView(APIView):
    """Handles the checkout process and create Paystack payment link
    """

    def post(self, request):
        
        user = request.user
        cart = Cart.objects.get(user=user)
        cart_items = CartItem.objects.filter(cart=cart)

        if not cart_items.exists():
            return Response({"error": "Your cart is empty"},
                            status=status.HTTP_404_NOT_FOUND)
        
        total_amount = sum(item.pizza.price * item.quantity for item in cart_items)

        # prepare paystack payment data
        reference = f"order_{user.id}_{int(total_amount * 100 )}"
        payment_data = {
            "email": user.email,
            "amount": total_amount * 100,
            "reference": reference
        }

        # Create a paystack payment link
        paystack = Paystack()
        response = paystack.initialize_payment(email=user.email, amount=payment_data.get('amount'))

        # check if paystack was successfull
        if response.status == 200:
            payment_url = response['data']['authorization_url']

            # redirect user to payment_url on paystack
            return redirect(payment_url)
        else:
            return Response({"error": "Failed to create Paystack payment link"},
                            status=status.HTTP_400_BAD_REQUEST)

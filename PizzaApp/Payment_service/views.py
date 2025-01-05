from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from paystackapi.transaction import Transaction
from django.utils.text import slugify


class InitializePaymentView(APIView):
    """Initiate a paystack transaction"""

    def post(self, request):
        """Handles POST requests to initiate payment"""

        data = request.data

        email = data.get('email')
        amount = data.get('amount')

        # Validate input
        if not email or not amount:
            return Response({"error": "Email and amount are required."},
                            status=status.HTTP_400_BAD_REQUEST)

        try:
            # Ensure amount is a valid positive integer
            amount = int(amount)
            if amount <= 0:
                raise ValueError("Amount must be greater than 0.")
        except ValueError:
            return Response({"error": "Amount must be a valid positive integer."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Generate a valid reference
        sanitized_email = slugify(email.split('@')[0])  # Create a safe version of the email prefix
        reference = f'Payment-{sanitized_email}-{amount}'

        try:
            response = Transaction.initialize(
                reference=reference,
                email=email,
                amount=amount * 100  # Convert amount to kobo
            )
            
            if response['status']:
                return Response(
                    {
                        "status": "Success",
                        "authorization_url": response['data']['authorization_url'],
                        "reference": response['data']['reference']
                    },
                    status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {"status": "failed", "message": response['message']},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except Exception as e:
            return Response(
                {"error": "An error occurred during transaction initialization.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class VerifyPaymentView(APIView):
    """Verify a paystack transaction"""

    def get(self, request):
        """Handles GET requests to verify payment"""
        
        reference = request.query_params.get("reference")

        if not reference:
            return Response({"error": "Reference is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            response = Transaction.verify(reference)

            if response["status"] and response["data"]["status"] == "success":
                return Response(
                    {"status": "success", "data": response["data"]},
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"status": "failed", "message": response.get("message", "Payment failed.")},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except Exception as e:
            return Response(
                {"error": "An error occurred during payment verification.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

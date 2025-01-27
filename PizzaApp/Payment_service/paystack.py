"""Paystack class file"""

import requests
from django.conf import settings


class Paystack:
    """Paystack class"""

    base_url = "https://api.paystack.co"

    def __init__(self):
        self.secret_key = settings.PAYSTACK_SECRET_KEY
        self.headers = {
            "Authorization": f"Bearer {self.secret_key}",
            "Content-Type": "application/json"
        }

    def initialize_payment(self, email, amount):
        """Initializes a transaction with Paystack

        args:
            (email) Customers email address
            (amount) Amount in Kobo (1 Naira eqaual to 100 Kobo)
        
        Returns:
            Response data (Dict)
        """

        url = f"{self.base_url}/transaction/initialize"
        payload = { "email": email, "amount": int(amount) * 100 }

        response = requests.post(url=url, headers=self.headers, json=payload)

        return response.json()
    
    def verify_payment(self, reference):
        """
        Verify a Paystack transaction with it's reference

        args:
            (reference) Transaction Reference
        Returns:
            Response data (Dict)
        """

        url = f"{self.base_url}/transaction/verify/{reference}"
        response = requests.get(url=url, headers=self.headers)

        return response.json()

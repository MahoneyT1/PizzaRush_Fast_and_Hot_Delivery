"""Payment system url"""
from django.urls import path

from .views import InitializePaymentView, VerifyPaymentView

urlpatterns = [
    path("paystack/initialize/", InitializePaymentView.as_view(), name="initialize_payment"),
    path("paystack/verify/", VerifyPaymentView.as_view(), name="verify_payment"),
]

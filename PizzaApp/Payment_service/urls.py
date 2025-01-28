"""Payment system url"""
from django.urls import path, re_path

from .views import InitializePaymentView, VerifyPaymentView, PaystackWebhookView

urlpatterns = [
    path('paystack/initialize/', view=InitializePaymentView.as_view(), name='creating-payment'),
    path('paystack/transaction/verify/<str:reference>/', view=VerifyPaymentView.as_view(), name='verify-payment'),
    path('paystack/webhook/', view=PaystackWebhookView.as_view(), name='paystack-webhook')
]

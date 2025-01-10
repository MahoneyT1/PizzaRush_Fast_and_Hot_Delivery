"""Payment system url"""
from django.urls import path

from .views import CreatePayment, Execute_payment

urlpatterns = [
    path('create_payment/', view=CreatePayment.as_view(), name='creating-payment'),
    path('paypal/execute/', view=Execute_payment.as_view(), name='execute-payment')
]

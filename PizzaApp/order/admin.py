"""Admin registering of models to appear at the front end of the admin
route
"""

from django.contrib import admin
from .models import Order, OrderItem


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    """Select what appears as a model fields in the frontend
    """
    list_display = ['id', 'status', 'reference', 'created_at', 'total_amount','user']


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    """select what appears on the model fields"""
    list_display = ['price', 'pizza', 'quantity']


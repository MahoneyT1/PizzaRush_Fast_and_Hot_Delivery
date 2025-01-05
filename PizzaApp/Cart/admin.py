"""Admin for the cart system"""
from django.contrib import admin
from .models import Cart, CartItem


class CartAdmin(admin.ModelAdmin):
    """Populates Carts in the backend"""
    list_display = ['id', 'user', 'created_at', 'updated_at']


class CartItemAdmin(admin.ModelAdmin):
    """Populates cartItems in the admin route"""
    list_display  = ['id', 'profuct', 'quantity']


admin.site.register(Cart)
admin.site.register(CartItem)

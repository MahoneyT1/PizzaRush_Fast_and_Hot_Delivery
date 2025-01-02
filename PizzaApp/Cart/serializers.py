"""Serializers for Cart and Cart-items"""

from rest_framework import serializers
from .models import Cart, CartItem


class CartItemSerializer(serializers.ModelSerializer):
    """Serializes the Cart Item
    """
    total_price = serializers.ReadOnlyField()

    class Meta:
        model = CartItem
        fields = ['id', 'pizza', 'quantity', 'total_price']


class CartSerializer(serializers.ModelSerializer):
    """Serializes Cart object"""
    total_price = serializers.ReadOnlyField()
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'user', 'items', 'total_price']

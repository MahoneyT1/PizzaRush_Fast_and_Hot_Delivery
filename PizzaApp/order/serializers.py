"""Order Serializer that serializes object/Deserializes Order
"""

from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer): # pylint: disable=too-few-public-methods
    """Represenation of the serializer
    """
    class Meta: # pylint: disable=too-few-public-methods
        """class representation of the metadata"""
        model = Order
        fields = ['id', 'name', 'description', 'status', 'user', 'pizza']
        ordering = ['name']

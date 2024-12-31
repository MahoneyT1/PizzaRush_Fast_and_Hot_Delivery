"""Serializer module for Pizza"""
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from .models import Pizza


class PizzaSerializer(serializers.ModelSerializer): # pylint: disable=too-few-public-methods
    """PizzaSerializer representation
    """
    
    class Meta: # pylint: disable=too-few-public-methods
        """Database schema"""
        model = Pizza
        fields = ['id', 'name', 'description_type', 'ingredients', 'image']
        ordering = ['name']
        

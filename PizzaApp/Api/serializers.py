"""CustomUser Serializer editing file
Customize how the model fields appear in the json/format of data
"""

from rest_framework import serializers
from .models import CustomUser


class CustomerUserSerializer(serializers.ModelSerializer):
    """Serializer table sstructure
    """
    orders = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        """Meta data customization"""
        model = CustomUser
        fields = ['id', 'email', 'orders', 'first_name', 'last_name']
        

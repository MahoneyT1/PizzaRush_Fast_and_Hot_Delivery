"""Serializer class that handles serializing user data
"""

from .models import User
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.models import BaseUserManager


class UserSerializer(serializers.ModelSerializer):
    """Serializes user model into json format
    """
    orders = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
    
        fields = ['id', 'first_name', 'last_name', 'address', 'username','password', 'orders', 'email']
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True}
        }

    def validate_email(self, value):
        """Validate that the email is unique"""
        if User.objects.filter(email=value).exists():
            raise ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        """Create a user and serialize the data"""

        password = validated_data.pop('password')

        if password:
            password = validate_password(password=password)
            user = User.objects.create_user(password=password)
            user.save()
            return user

"""Serializer class that handles serializing user data
"""

from .models import User
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.ModelSerializer):
    """Serializes user model into json format
    """
    orders = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'address', 'username','password', 'orders']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        """Validates that the email exists
        """

        exists_ = User.objects.filter(email=value).exists()
        if not exists_:
            raise ValidationError('User with this email exists')
        return value
    
    def validate_username(self, value):
        """Validates that the username exists
        """
        username_exists_ = User.objects.filter(username=value).exists()
        if username_exists_:
            raise ValidationError('User already exists!')
        return value

    def create(self, validated_data):
        """Create a user by validating the user password
        """
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
    def validate_password(self, value):
        """Validates password"""

        validate_password(value)
        return value
    
    def update(self, instance, validated_data):
        """Validates user before an object update
        """
        if 'password' in validated_data.keys():
            password = validated_data.pop('password')

            instance.set_password(password)
        
        for key, value in validated_data.items():
            setattr(instance, key, value)

        instance.save()
        return isinstance

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

        fields = ['id', 'username', 'email', 'orders', 'first_name', 'last_name', 'password', 'location']

    def validate_username(self, value):
        """Check if the username is already taken."""
        if CustomUser.objects.filter(username=value).exists():
            raise serializers.ValidationError("The username is already taken. Please choose another.")
        return value

    def validate_email(self, value):
        """Check if the email is already taken."""
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("The email is already registered. Please use another.")
        return value

    def create(self, validated_data):
        """Handle user creation and hashing password."""
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user


        fields = ['id', 'email', 'orders', 'first_name', 'last_name', 'image']
        

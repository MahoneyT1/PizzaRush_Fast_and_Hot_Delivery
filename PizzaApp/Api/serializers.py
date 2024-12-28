from rest_framework import serializers
from .models import CustomUser
from order.models import Order


class CustomerUserSerializer(serializers.ModelSerializer):
    orders = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'orders']

        object = CustomUser.objects.all()


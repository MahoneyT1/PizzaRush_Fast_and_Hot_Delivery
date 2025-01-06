from rest_framework import serializers

class PaymentSerializer(serializers.Serializer):
    email = serializers.EmailField()
    amount = serializers.IntegerField()  # Amount in kobo (e.g., 5000 for ₦50)

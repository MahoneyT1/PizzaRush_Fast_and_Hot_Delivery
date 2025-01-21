"""Views for cart system"""
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from User.serializers import UserSerializer

# custom models
from pizza.models import Pizza
from User.models import User
from .models import CartItem, Cart
from .serializers import CartItemSerializer, CartSerializer


class CartDetailView(APIView):
    """checks if cart for a specific user exists
    lists the cart if it exists"""
    
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Gets a cart by """
        cart = Cart.objects.get(user=request.user.id)

        if not cart:
            return Response({"detail": "Cart not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CartItemCreateView(APIView):
    """Creates a cart (if it doesn't exist) and adds items to it."""

    def post(self, request):
        """Adds an item to the cart or creates the cart if it doesn't exist."""
        user = request.user

        # Retrieve or create the cart for the user
        cart, created = Cart.objects.get_or_create(user=user)

        # Extract pizza ID and quantity from the request data
        pizza_id = request.data.get('pizza')
        quantity = request.data.get('quantity', 1)

        # Validate the pizza ID
        pizza = get_object_or_404(Pizza, pk=pizza_id)

        # Check if the cart item already exists
        cart_item, item_created = CartItem.objects.get_or_create(
            cart=cart,
            pizza=pizza,
            defaults={'quantity': quantity}
        )

        if not item_created:
            # If the item already exists, update the quantity
            cart_item.quantity += int(quantity)
            cart_item.save()

        serializer = CartItemSerializer(cart_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete_item(self, request):
        """deletes an item from the cart"""

        cart = Cart.objects.filter(user=request.user)

        if not cart:
            return Response({"details": "Cart not found"},
                            status=status.HTTP_404_NOT_FOUND)

        pizza_id = request.data.get('pizza')

        if not pizza_id:
            return Response({"details": "Pizza not found"},
                            status=status.HTTP_404_NOT_FOUND)

        try:
            _ = Pizza.objects.get(pizza_id) # disable=no-member
        except Pizza.DoesNotExist:
            return Response({"details":"This pizza is out of stock."},
                            status=status.HTTP_404_NOT_FOUND)

        cart_item = CartItem.objects.filter(cart=cart, pizza=pizza_id).first()
        if not cart_item:
            return Response({"detail": "Item not found in cart."},
                            status=status.HTTP_404_NOT_FOUND)

        cart_item.delete()
        return Response({"details":"Item deleted from the cart."},
        status=status.HTTP_204_NO_CONTENT)


class CartItemListView(APIView):
    """List all the cartItems of a particular cart"""

    def get(self, request):
        """Get request for list of items added to cart"""
        cart = Cart.objects.filter(user=request.user)
        cart_item = CartItem.objects.filter(cart__in=cart)
        if cart_item:
            serializer = CartItemSerializer(cart_item, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"details": "Cart is empty"}, status=status.HTTP_200_OK)

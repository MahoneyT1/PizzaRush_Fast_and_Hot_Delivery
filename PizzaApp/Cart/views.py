"""Views for cart system"""
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status

# custom models
from pizza.models import Pizza
from User.models import User
from .models import CartItem, Cart
from .serializers import CartItemSerializer, CartSerializer


class CartDetailView(APIView):
    """checks if cart already exists and then"""

    def get(self, request):
        """Gets a cart by """
        cart = Cart.objects.filter(user=request.user)
        if not cart:
            return Response({"detail": "Cart not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CartItemCreateView(APIView):
    """creates cart and add items to cart"""

    def post(self, request):
        """Adds item to the cart or create it"""
        cart_item = self.add_to_cart(request=request)
        serializer = CartItemSerializer(cart_item)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def add_to_cart(self, request):
        """Add to cat helper function"""

        cart, created = Cart.objects.get_or_create(user=request.user)
        pizza = get_object_or_404(Pizza, pk=request.data.get('pizza'))

        serializer = CartItemSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        cart_item, created = CartItem.objects.get_or_create(cart=cart, pizza=pizza)

        if not created:
            cart_item.quantity += 1
            cart_item.save()
            return cart_item
        return cart_item

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
    """List all the cart of a particular user"""

    def get(self, request):
        """Get request for list of items added to cart"""
        cart = Cart.objects.filter(user=request.user)
        cart_item = CartItem.objects.filter(cart__in=cart)
        if cart_item:
            serializer = CartItemSerializer(cart_item, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"details": "Cart is empty"}, status=status.HTTP_200_OK)

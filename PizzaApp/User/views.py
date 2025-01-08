"""Views file for custom User"""
from django.http import Http404

# from rest_framework.views import APIView
from rest_framework.decorators import APIView

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
import uuid
from rest_framework.exceptions import ValidationError
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from .serializers import UserSerializer
from .models import User
from order.serializers import OrderSerializer
from .permission import IsOwnerOrReadOnly
from order.serializers import OrderSerializer
from order.models import Order


class UserListView(APIView):
    """Lists users """

    # permission_classes = [IsAuthenticated]

    # permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get(self, request):
        """Sends a request to get the list of users in the system"""
        # pylint: disable=unused-argument

        users = User.objects.all()
        if users:
            serializer = UserSerializer(users, many=True)
            response = {
                "message" : "All Users",
                "data" : serializer.data
            }
            return Response(data=response, status=status.HTTP_200_OK)
        raise Http404

    def post(self, request):
        """Sends a post request and acccepts data for pesistence
        deserializes json to python dict
        """

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetailView(APIView):
    """User detailed view, included relatioted tables route
    eg http://api/users/route
    """
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get_object(self, pk):
        """Fetches obj by the id=pk"""
        user = User.objects.get(pk=pk)

        if user:
            return user
        raise Http404

    def get(self, request, pk):
        """handles a get request to fetch data by Id"""
        # pylint: disable=unused-argument
        user = self.get_object(pk=pk)

        if user:
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        """Handles Update request/PUT to modify object by Id"""
        user = self.get_object(pk=pk)
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        """Deletes a user"""

        # pylint: disable=unused-argument
        user_to_delete = self.get_object(pk=pk)
        if user_to_delete:
            user_to_delete.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

class UserOrderViewList(APIView):
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]

    def get(self, request, pk):
        """This get method gets a use by pk and fetches the related attribute
        """
        user = User.objects.get(pk=pk)
        orders = user.orders.all()

        if user:
            serializer = OrderSerializer(orders, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

    def post(self, request, pk):

        pk = uuid.UUID(pk)
        user = User.objects.get(pk=pk)

        if user:
            if request.user.id != user.pk:
                return Response({"error": "You can only create Orders for yourself"})

            serializer = OrderSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Not found': "User not found!"}, status=status.HTTP_404_NOT_FOUND)
        

class UserOrderDetailView(APIView):
    """User Order view that handles PUT, DELETE GET
    """
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]

    def get_object(self, pk):
        """Gets an object by the Object and pk"""
        return get_object_or_404(User, pk=pk)
    
    def get(self, request, user_id, order_id):
        """Handles get request with an Id"""
        try:
            user = self.get_object(pk=user_id)
            specific_order = user.orders.get(pk=order_id)          
            serializer = OrderSerializer(specific_order)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found!"}, status=status.HTTP_404_NOT_FOUND)
        except Order.DoesNotExist:
            return Response({"error": "Order not found!"}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, user_id, order_id):
        """Updates an order of a user by Id"""

        try:
            user = self.get_object(pk=user_id)

            order = user.orders.get(pk=order_id)
            serializer = OrderSerializer(order, data=request.data)

            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except User.DoesNotExist:
            return Response({"error": "User not found!"}, status=status.HTTP_404_NOT_FOUND)
        except Order.DoesNotExist:
            return Response({"error": "Order not found!"}, status=status.HTTP_404_NOT_FOUND)
        except ValidationError as e:
            return Response({"error": "Validation errors"}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id, order_id):
        """Deletes an order from the reverse related
        field orders in user model
        """
        try:
            user = self.get_object(pk=user_id)
            order_to_delete = user.orders.get(pk=order_id)
            order_to_delete.delete()
            return Response({"Message": "Successfully Deleted this order"},
                            status=status.HTTP_204_NO_CONTENT)
        except User.DoesNotExist:
            return Response({"error": "User not found!"}, status=status.HTTP_404_NOT_FOUND)
        except Order.DoesNotExist:
            return Response({"error": "Order not found!"}, status=status.HTTP_404_NOT_FOUND)

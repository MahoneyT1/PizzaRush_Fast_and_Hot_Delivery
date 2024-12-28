from rest_framework import generics
from .models import CustomUser
from .serializers import CustomerUserSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class UserListView(APIView):
    """Lists users """
    
    def get(self, request, format=None):
        """Sends a friend request to get the list of users in the system"""
        
        try:
            users = CustomUser.objects.all()
            serializer = CustomerUserSerializer(users, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except CustomUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        """Sends a post request and acccepts data for pesistence
        deserializes json to python dict
        """

        serializer = CustomerUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetailView(APIView):
    def get_object(self, pk):
        try:
            user = CustomUser.objects.get(pk=pk)
            return user
        except Exception:
            raise Http404
        
    def get(self, request, pk, format=None):
        user = self.get_object(pk=pk)

        if user:
            serializer = CustomerUserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, pk, format=None):
        user = self.get_object(pk=pk)
        serializer = CustomerUserSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, pk, format=None):
        """Deletes a user"""

        user_to_delete = self.get_object(pk=pk)
        if user_to_delete:
            user_to_delete.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

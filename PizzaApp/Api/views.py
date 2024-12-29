"""Views file for custom User"""
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .serializers import CustomerUserSerializer
from .models import CustomUser



class UserListView(APIView):
    """Lists users """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Sends a friend request to get the list of users in the system"""
        # pylint: disable=unused-argument

        users = CustomUser.objects.all()
        if users:
            serializer = CustomerUserSerializer(users, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        raise Http404

    def post(self, request):
        """Sends a post request and acccepts data for pesistence
        deserializes json to python dict
        """

        serializer = CustomerUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetailView(APIView):
    """User detailed view, included relatioted tables route
    eg http://api/users/route
    """
    def get_object(self, pk):
        """Fetches obj by the id=pk"""
        user = CustomUser.objects.get(pk=pk)

        if user:
            return user
        raise Http404

    def get(self, request, pk):
        """handles a get request to fetch data by Id"""
        # pylint: disable=unused-argument
        user = self.get_object(pk=pk)

        if user:
            serializer = CustomerUserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        """Handles Update request/PUT to modify object by Id"""
        user = self.get_object(pk=pk)
        serializer = CustomerUserSerializer(user, data=request.data)

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

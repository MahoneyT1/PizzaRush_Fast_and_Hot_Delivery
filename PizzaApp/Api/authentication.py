from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser


class LoginView(APIView):
    """Login view class that handles the login authentication
    """

    
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request):
        """Sends a request to login, with data in the body of the request
        """
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=username, password=password)
        print(request.data)

        if user is not None:
            login(request=request, user=user)
            return Response({"message": "Login Successfully"},
                            status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"},
                        status=status.HTTP_400_BAD_REQUEST)
    

class LogoutView(APIView):
    """Logout View"""
    def post(self, request):
        """Post request to logout"""
        logout(request=request)
        return Response({'message': 'Logged out Successfully'},
                        status=status.HTTP_200_OK)

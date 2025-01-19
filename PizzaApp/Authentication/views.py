from django.shortcuts import render
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from django.contrib.auth import logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CustomTokenObtainPairView(TokenObtainPairView):
    """storing tokens in django session request object"""

    def post(self, request, *args, **kwargs):
        """makes a post request to save up token"""

        response = super().post(request, *args, **kwargs)
        tokens = response.data

        # store tokens in session
        request.session['access_token'] = tokens['access']
        request.session['refresh'] = tokens['refresh']

        return response


class CustomTokenRefreshView(TokenRefreshView):
    """Token refresh view"""

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        tokens = response.data

        request.session['access_token'] = tokens.get('access')

        if 'refresh' in tokens:
            request.session['refresh'] = tokens['refresh']
        
        return response


class LogoutView(APIView):
    def post(self, request):
        # Clear tokens from session
        request.session.flush()
        logout(request)
        return Response({"message": "Logged out successfully!"}, status=status.HTTP_200_OK)

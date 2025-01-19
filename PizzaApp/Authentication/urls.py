from django.urls import path
from .views import (
    CustomTokenObtainPairView,
    CustomTokenRefreshView,
    LogoutView
)

urlpatterns = [
    # Login - Obtain Access and Refresh Tokens
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # Token Refresh - Get a new Access Token
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    
    # Logout - Clear Tokens and End Session
    path('api/logout/', LogoutView.as_view(), name='logout'),
]

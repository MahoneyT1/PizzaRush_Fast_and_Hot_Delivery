"""Users api view routes
specifies routes in user table
"""
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UserListView, UserDetailView


urlpatterns = [
    path('api/token/', view=TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', view=TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', view=UserListView.as_view()),
    path('users/<str:pk>/', view=UserDetailView.as_view()),
    path('users/orders/', view=UserDetailView.as_view()),
    path('users/<str:pk>/orders/', view=UserDetailView.as_view()),
]

from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .authentication import LoginView, LogoutView
from .views import (UserDetailView, UserListView,
                    UserOrderDetailView, UserOrderViewList
                    )


urlpatterns = [
    path('users/', view=UserListView.as_view()),
    path('users/<str:pk>/', view=UserDetailView.as_view()),

    path('users/<str:pk>/orders/', view=UserOrderViewList.as_view()),
    path('users/<str:user_id>/orders/<str:order_id>/', view=UserOrderDetailView.as_view()),

    
    path('api/token/', view=TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', view=TokenRefreshView.as_view(), name='token_refresh'),

    path('api/login/', view=LoginView.as_view(), name='api-login'),
    path('api/logout/', view=LogoutView.as_view(), name='api-logout')
]
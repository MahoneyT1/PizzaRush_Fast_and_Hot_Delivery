from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (UserDetailView, UserListView,
                    UserOrderDetailView, UserOrderViewList
                    )


urlpatterns = [
    path('users/', view=UserListView.as_view()),
    path('users/<str:pk>/', view=UserDetailView.as_view()),

    path('users/<str:pk>/orders/', view=UserOrderViewList.as_view()),
    path('users/<str:user_id>/orders/<str:order_id>/', view=UserOrderDetailView.as_view()),

]
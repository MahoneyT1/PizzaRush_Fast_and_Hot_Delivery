"""Urls routes for the Order class /Table
"""

from django.urls import path

from .views import OrderViewList, OrderDetailView

urlpatterns = [
    path('orders/', view=OrderViewList.as_view()),
    path('orders/<str:id>', view=OrderDetailView.as_view())
]

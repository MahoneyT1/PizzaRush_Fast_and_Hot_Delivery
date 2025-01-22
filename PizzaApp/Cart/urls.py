"""routes for cart system"""

from .views import CartDetailView, CartItemCreateView, CartItemListView,DeleteCartItems
from rest_framework.urls import path


urlpatterns = [
    path('cart/', view=CartDetailView.as_view(), name='cart-list'),
    path('cart/add/', view=CartItemCreateView.as_view(), name='cart-item-post'),
    path('cart/items/', view=CartItemListView.as_view(), name="list-cartItem"),
    path('cart/delete/', view=DeleteCartItems.as_view(), name="delete-cartItem")
]

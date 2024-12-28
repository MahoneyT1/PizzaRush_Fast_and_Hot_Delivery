from django.urls import path
from .views import PizzaListView, PizzaDetailView


urlpatterns = [
    path('pizzas/', view=PizzaListView.as_view()),
    path('pizzas/<str:pk>', view=PizzaDetailView.as_view())
]
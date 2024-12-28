"""Admin registering of models to appear at the front end of the admin
route
"""
from django.contrib import admin
from .models import Pizza


@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    """PizzaAdmin Representation"""
    list_display = ['id', 'name', 'description_type', 'ingredients']

"""Admin registering of models to appear at the front end of the admin
route
"""

from django.contrib import admin
from .models import Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    """Select what appears as a model fields in the frontend
    """
    list_display = ['id', 'name', 'status', 'description', 'pizza', 'user']

"""Admin Register Model
Typically registers models to appear in the admin route for controlling
the CRUD operations on the models from the authorized admin side
"""

from django.contrib import admin
from .models import CustomUser


@admin.register(CustomUser)
class CustomAdminUser(admin.ModelAdmin):
    """Registers the User model in admin site"""

    list_display = ['id', 'first_name', 'last_name', 'email', 'phone_number', 'location']

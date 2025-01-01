"""Admin site User registeration and confirmation
These include customizzing the default behaviour of UserAdmin class 
"""
from django.contrib import admin
from User.models import User
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm, UserCreationForm


class CustomUserAdmin(UserAdmin):
    """Representation of the the User in admin parnel
    """
    model = User
    add_form = UserCreationForm
    form = UserChangeForm

    list_display = ['id', 'first_name', 'last_name', 'email',
                    'phone_number', 'address', 'username']

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'phone_number', 'address', 'username')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'phone_number', 'address', 'username'),
        }),
    )
admin.site.register(User, CustomUserAdmin)


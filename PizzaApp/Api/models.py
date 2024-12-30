"""Model for all our database schema
"""
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    """Main User table for DB
    mandatory fields [id, phone_number, location, 'name']
    """
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, blank=True, null=False)
    phone_number = models.CharField(max_length=12, unique=True, blank=False, null=False)
    first_name = models.CharField(max_length=60, blank=False, null=False)
    last_name = models.CharField(max_length=60, blank=False, null=False)
    location = models.CharField(max_length=300, blank=False, null=False)
    username = models.CharField(max_length=100, unique=True, blank=True, null=True)
    image = models.ImageField(upload_to='users/images/', blank=True, null=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_number']

    class Meta:
        """Models Metadata"""
        app_label = 'Api'

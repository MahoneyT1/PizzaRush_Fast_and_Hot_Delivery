"""Model for all our database schema
"""
from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    """Main User table for DB
    mandatory fields [id, phone_number, location, 'name']
    """
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, blank=True, null=False)
    phone_number = models.CharField(max_length=12, unique=True, blank=False, null=False)
    location = models.CharField(max_length=300, unique=True, blank=False, null=False)
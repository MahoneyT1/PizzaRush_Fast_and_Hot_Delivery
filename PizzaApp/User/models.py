"""
Model for all our database schema
"""
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser

def generate_uuid():
    return str(uuid.uuid4())


class User(AbstractUser):
    """Main User table for DB
    mandatory fields [id, username, email, password]
    """

    id = models.UUIDField(default=generate_uuid, primary_key=True, blank=True, null=False)
    email = models.EmailField(unique=True, blank=False, null=False)
    first_name = models.CharField(max_length=60, blank=False, null=False)
    last_name = models.CharField(max_length=60, blank=False, null=False)
    phone_number = models.CharField(max_length=12, unique=True, blank=True, null=True)
    address = models.CharField(max_length=300, blank=False, null=False)
    username = models.CharField(max_length=100, unique=True, blank=False, null=False)

    image = models.ImageField(upload_to='users/images/', blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'address', 'password', 'username'] 
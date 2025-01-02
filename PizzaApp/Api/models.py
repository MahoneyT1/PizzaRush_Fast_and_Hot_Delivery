"""
Model for all our database schema
"""
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    """Main User table for DB
    mandatory fields [id, username, email, password]
    """
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, blank=True, null=False)
    phone_number = models.CharField(max_length=12, unique=True, blank=True, null=True)
    username = models.CharField(max_length=100, unique=True, blank=False, null=False)
    email = models.EmailField(unique=True, blank=False, null=False)
    phone_number = models.CharField(max_length=12, unique=True, blank=False, null=False)
    first_name = models.CharField(max_length=60, blank=False, null=False)
    last_name = models.CharField(max_length=60, blank=False, null=False)
    location = models.CharField(max_length=300, blank=False, null=False)
    first_name = models.CharField(max_length=60, blank=True, null=True)
    last_name = models.CharField(max_length=60, blank=True, null=True)
    location = models.CharField(max_length=300, blank=True, null=True)
    username = models.CharField(max_length=100, unique=True, blank=True, null=True)
    image = models.ImageField(upload_to='users/images/', blank=True, null=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password']  # Only email is required in addition to the username

    def save(self, *args, **kwargs):
        """Ensure username is generated automatically if not provided"""
        if not self.username:
            if self.first_name and self.last_name:
                self.username = f"{self.first_name.lower()}.{self.last_name.lower()}"
            else:
                self.username = str(uuid.uuid4())[:8]  # Generate a random username if names are not provided
        super().save(*args, **kwargs)

    class Meta:
        """Models Metadata"""
        app_label = 'Api'

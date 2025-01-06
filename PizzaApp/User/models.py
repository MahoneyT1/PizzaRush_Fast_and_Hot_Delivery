"""
Model for all our database schema
"""
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.core.exceptions import ValidationError


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        
        if self.model.objects.filter(email=email).exists():
            raise ValidationError('Email address is already in use.')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)  # Ensures correct database is used
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
     

        return self.create_user(email, password, **extra_fields)
    

def generate_uuid():
    return str(uuid.uuid4())


class User(AbstractUser, PermissionsMixin):
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

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'address', 'password', 'username']

    def __str__(self):
        return f'{self.username} {self.email}'

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
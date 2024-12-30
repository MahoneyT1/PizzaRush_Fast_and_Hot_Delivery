"""Pizza module file, Pizza Table in database schema
"""
import uuid

from django.db import models


class Pizza(models.Model):
    """Representation of Pizza table"""

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, blank=True, null=False)
    name = models.CharField(max_length=100, blank=False, null=False)
    description_type = models.CharField(max_length=200, null=False, blank=False)
    ingredients = models.CharField(max_length=200, blank=False, null=False)
    price = models.BooleanField(max_length=10, default=0, null=False, blank=False)
    image = models.ImageField(upload_to='pizza/images/', blank=True, null=True)

    def __str__(self):
        return f'{self.name}, {self.id}'

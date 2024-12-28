from django.db import models
import uuid


class Pizza(models.Model):
    """Representation of Pizza table"""

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, blank=True, null=False)
    name = models.CharField(max_length=100, blank=False, null=False)
    description_type = models.CharField(max_length=200, null=False, blank=False)
    ingredients = models.CharField(max_length=200, blank=False, null=False)

    def __str__(self):
        return f'{self.name}, {self.id}'

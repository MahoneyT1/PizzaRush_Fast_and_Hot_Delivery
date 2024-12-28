from django.db import models
import uuid
from pizza.models import Pizza
from Api.models import CustomUser

class Order(models.Model):
    """Table/Class representation of Table Order"""

    STATUS = ([
        ("Picked-up", "On Transit"),
        ("Delivered", "Received")
    ])

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, blank=True, null=False)
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.CharField(max_length=200, null=False, blank=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name= 'orders')
    status = models.CharField(max_length=30, choices=STATUS, default='Picked-up', null=True, blank=False)
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE, related_name = 'orders')

    def __str__(self):
        return f'{self.id} {self.name}'


"""Order table schema, lists out the fields and their datatypes with some
restrictions
"""
import uuid

from django.db import models
from pizza.models import Pizza
from User.models import User

class Order(models.Model):
    """Table/Class representation of Table Order"""

    STATUS = ([
        ("Paid", "Paid"),
        ("Confirmed", "Confirmed"),
        ("On route", "On route"),
        ("Delivered", "Received"),
        ("Received", "Received")
    ])

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, blank=True, null=False)
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.CharField(max_length=200, null=False, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name= 'orders', blank=True, null=True)
    status = models.CharField(max_length=30, choices=STATUS,
                              default='Picked-up', null=True, blank=False)
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE, related_name='orders', blank=True)

    def __str__(self):
        """Representation of the Order in string"""
        return f'{self.id} {self.name}'

"""Order table schema, lists out the fields and their datatypes with some
restrictions
"""
import uuid

from django.db import models
from pizza.models import Pizza
from User.models import User

def generate_uuid():
    return str(uuid.uuid4())


class Order(models.Model):
    """Table/Class representation of Table Order"""

    STATUS = ([
        ("Paid", "Paid"),
        ("Confirmed", "Confirmed"),
        ("On route", "On route"),
        ("Delivered", "Received"),
        ("Received", "Received")
    ])

    id = models.UUIDField(default=generate_uuid, primary_key=True, blank=True, null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name= 'orders', blank=True, null=True)
    status = models.CharField(max_length=30, choices=STATUS,
                              default='Picked-up', null=True, blank=False)
    reference = models.CharField(max_length=100, blank=True, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)

    

    def __str__(self):
        """Representation of the Order in string"""
        return f'{self.id} {self.name}'
    

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name="items", on_delete=models.CASCADE)
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)  
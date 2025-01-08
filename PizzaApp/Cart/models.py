"""Models for Cart and cart-Item """
from django.db import models
import uuid
from User.models import User
from pizza.models import Pizza


def generate_uuid():
    """Function generates a uuid"""
    return str(uuid.uuid4())


class Cart(models.Model):
    """Cart table representation"""

    id = models.UUIDField(primary_key=True, default=generate_uuid, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Returns string representation of cart"""
        return f'{self.id}'
    
    def total_price(self):
        return sum()


class CartItem(models.Model):
    """adds items to the cart"""
    id = models.UUIDField(primary_key=True, unique=True, default=generate_uuid, blank=False, null=False)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    @property
    def total_price(self):
        """Calculates the total price of the seleted item
        """
        return self.pizza.price * self.quantity
    
    def __str__(self):
        """returns string representation of model"""
        return f'{self.cart}'

from django.db import models
import uuid
from User.models import User
from pizza.models import Pizza


class Cart(models.Model):
    """Cart table representation"""

    id = models.UUIDField(max_length=100, primary_key=True, unique=True, default=uuid.uuid4)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Returns string representation of cart"""
        return f'{self.id}'


class CartItem(models.Model):
    """adds items to the cart"""

    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    @property
    def total_price(self):
        """Calculates the total price of the seleted item
        """
        return self.pizza.price * self.quantity


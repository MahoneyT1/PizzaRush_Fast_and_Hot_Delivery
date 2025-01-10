"""Admin registering of models to appear at the front end of the admin
route
"""
from django.utils.html import format_html
from django.contrib import admin
from .models import Pizza


@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    """PizzaAdmin Representation"""
    list_display = ['id', 'name', 'price', 'description_type', 'ingredients', 'display_image']

    def display_image(self, obj):
        """Methods that fetches the image from the url
        uses html formatter to show it on the admin portal
        """
        if not obj.image:
            return "No image"
        return format_html('<img src="{}" style="width: 100px"; height:" auto"/>'.format(obj.image.url))

    display_image.allow_tags = True
    display_image.short_description = 'Image'

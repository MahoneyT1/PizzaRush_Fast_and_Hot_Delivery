# Generated by Django 5.1.4 on 2024-12-30 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizza', '0002_pizza_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='pizza',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='pizza/images/'),
        ),
    ]

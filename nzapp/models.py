from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    subject = models.CharField(max_length=400)
    message = models.CharField(max_length=800)

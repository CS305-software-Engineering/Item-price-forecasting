from django.db import models

# Create your models here.

class user(models.Model):

   username = models.CharField(max_length = 50)
   mail = models.CharField(max_length = 50)
   name = models.CharField(max_length = 50)
   password = models.CharField(max_length = 50)

   class Meta:
      db_table = "user"

class products(models.Model):

   username = models.CharField(max_length = 50)
   productname = models.CharField(max_length = 50)
   website = models.CharField(max_length = 50)
   link = models.CharField(max_length = 50)

   class Meta:
      db_table = "products"

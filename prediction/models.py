from django.db import models

# Create your models here.

class product(models.Model):

   username = models.CharField(max_length = 50)
   productname = models.CharField(max_length = 50)
   domain = models.CharField(max_length = 50)
   pid = models.CharField(max_length = 50)

   class Meta:
      db_table = "product"

class price(models.Model):

   domain = models.CharField(max_length = 50)
   pid = models.CharField(max_length = 50)
   cost = models.DecimalField(max_digits=12, decimal_places=3, default=0)
   date = models.DateField(default = "2000-01-01")

   class Meta:
      db_table = "price"
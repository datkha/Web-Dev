from django.db import models

class Category(models.Model):
    name = models.CharField()
    
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)

    
    def __str__(self):
        return self.name
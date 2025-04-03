from django.test import TestCase
from django.db import models
from .models import Category, Product
from django.http import JsonResponse

def category_product(request,id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category = category)
    data = []
    for product in products:
        data.append({
            'id':product.id,
            'name': product.name,
            'price':product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name
        })
        
    return JsonResponse(data, safe=False)
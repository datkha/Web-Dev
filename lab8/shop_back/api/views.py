from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def list_products(request):
    products = Product.objects.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name
        })
    return JsonResponse(data, safe=False)

def get_product(request, id):
    product = Product.objects.get(id=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.name
    }
    return JsonResponse(data)

def list_categories(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name,
        })
    return JsonResponse(data, safe=False)

def get_category(request, id):
    category = Category.objects.get(id = id)
    data = {
        'id': category.id,
        'name': category.name
    }
    return JsonResponse(data)

def category_products(request,id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category=category)
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name':product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name
        })
    return JsonResponse(data,safe=False)
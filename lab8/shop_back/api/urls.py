from django.urls import path
from .views import list_products,get_product,list_categories,get_category,category_products


urlpatterns = [
    path('products/', list_products),
    path('products/<int:id>/', get_product),
    path('categories/', list_categories),
    path('categories/<int:id>/', get_category),
    path('categories/<int:id>/products', category_products)
]
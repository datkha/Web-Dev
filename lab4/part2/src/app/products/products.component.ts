import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Product } from '../interface/product';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges {
  @Input() selectedCategory: string = '';

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      this.products = JSON.parse(savedProducts);
    } else {
      this.productService.getProducts().subscribe(data => {
        this.products = data;
        localStorage.setItem('products', JSON.stringify(this.products));
        this.filterProducts();
      });
    }
    this.filterProducts();
  }

  ngOnChanges() {
    this.filterProducts();
  }
  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.name !== product.name);
    this.filterProducts();
    localStorage.setItem('products', JSON.stringify(this.products));
  }


  filterProducts() {
    this.filteredProducts = this.selectedCategory
      ? this.products.filter(p => p.category.toLowerCase() === this.selectedCategory.toLowerCase())
      : this.products;
  }
}

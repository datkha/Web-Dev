import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  private _selectedCategory: string = '';

  @Input()
  set selectedCategory(value: string) {
    this._selectedCategory = value;
    this.filterProducts();
  }

  get selectedCategory(): string {
    return this._selectedCategory;
  }

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filterProducts();
    });
  }

  filterProducts() {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(p => p.category === this.selectedCategory);
    } else {
      this.filteredProducts = this.products;
    }
  }
}

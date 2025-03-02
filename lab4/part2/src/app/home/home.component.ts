import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ProductsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  selectedCategory: string = '';
  @ViewChild("productComp") productsComponent!: ProductsComponent;
  resetProducts() {
    localStorage.removeItem('products');
  }

  constructor(private router: Router) { }
}

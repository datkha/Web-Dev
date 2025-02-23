import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaspi';
  categories: string[] = ['Phones', 'Laptops', 'Gaming_Consoles', 'Watches', 'Headphones', 'Camera'];
  selectedCategory: string = '';

  constructor(private router: Router) { }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  isProductPage(): boolean {
    return this.router.url.startsWith('/product/');
  }
}

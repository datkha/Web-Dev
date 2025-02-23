import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productId: string | null = null;
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.productService.getProducts().subscribe(products => {
      this.product = products.find(p => p.name.toLowerCase() === this.productId?.toLowerCase())
    })
  }

}

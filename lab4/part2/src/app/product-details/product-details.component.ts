import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId: string | null = null;
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  likeProduct() {
    if (this.product) {
      this.product.likes += 1;
    }
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.productService.getProducts().subscribe(products => {
      this.product = products.find(p => p.name.toLowerCase() === this.productId?.toLowerCase());
      if (this.product && this.product.likes === undefined) {
        this.product.likes = 0; //
      }
    });
  }

}

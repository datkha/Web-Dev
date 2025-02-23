import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'category/:category', component: ProductsComponent },
    { path: 'product/:id', component: ProductDetailsComponent }
];

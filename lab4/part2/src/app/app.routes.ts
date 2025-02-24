import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'category/:category', component: ProductsComponent },
    { path: 'product/:id', component: ProductDetailsComponent }
];

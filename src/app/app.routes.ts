import { Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { FirstPageComponent } from "./shoes-page/shoes-page.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";

export const routes : Routes = [
    { path: '', redirectTo: 'home-page', pathMatch: 'full'},
    { path: 'home-page', component: HomePageComponent },
    { path: 'first-page', component: FirstPageComponent },
    { path: 'detail-page/:name', component: DetailProductComponent },
    { path: 'shop-cart', component: ShopCartComponent }
];

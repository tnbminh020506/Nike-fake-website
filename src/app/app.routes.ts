import { Routes } from "@angular/router";

import { FirstPageComponent } from "./shoes-page/shoes-page.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";

export const routes : Routes = [
    { path: '', redirectTo: 'first-page', pathMatch: 'full'},
    { path: 'first-page', component: FirstPageComponent },
    { path: 'detail-page/:name', component: DetailProductComponent },
    { path: 'shop-cart', component: ShopCartComponent }
];

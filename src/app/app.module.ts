import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";  

import { provideRouter, RouterOutlet, withComponentInputBinding } from "@angular/router";
import { RouterLink } from "@angular/router";
import { RouterLinkActive } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { provideHttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FirstPageComponent } from "./shoes-page/shoes-page.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { HeaderComponent } from "./header/header.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";

import { ProductService } from "./typescript/product.service";
import { ProductData } from "./typescript/product-data";
import { routes } from "./app.routes";


@NgModule({
    declarations: [
        AppComponent,
        FirstPageComponent,
        DetailProductComponent,
        HeaderComponent,
        ShopCartComponent,
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        FormsModule,
    ],
    providers: [ 
        ProductData,
        ProductService,
        provideHttpClient(),
        provideRouter(routes, withComponentInputBinding()),
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {

}
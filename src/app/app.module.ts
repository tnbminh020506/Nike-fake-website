import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";  

import { FormsModule } from "@angular/forms";
import { provideHttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { InitialPageComponent } from "./initial-page/initial-page.component";
import { FirstPageComponent } from "./shoes-page/shoes-page.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { HeaderComponent } from "./3-header/header.component";
import { TestBuildComponent } from "./test-build/test-build.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";

import { ProductService } from "./product/product.service";
import { ProductData } from "./product/product-data";


@NgModule({
    declarations: [
        AppComponent,
        InitialPageComponent,
        FirstPageComponent,
        DetailProductComponent,
        TestBuildComponent,
        HeaderComponent,
        ShopCartComponent,
    ],
    imports: [
    BrowserModule,
    FormsModule,
],
    providers: [ 
        ProductData,
        ProductService,
        provideHttpClient(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

}
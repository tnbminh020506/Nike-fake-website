import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";  

import { AppComponent } from "./app.component";
import { InitialPageComponent } from "./initial-page/initial-page.component";
import { FirstPageComponent } from "./shoes-page/shoes-page.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { HeaderComponent } from "./3-header/header.component";
import { TestBuildComponent } from "./test-build/test-build.component";

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
    ],
    imports: [
        BrowserModule,
    ],
    providers: [ 
        ProductData,
        ProductService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

}
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";  

import { AppComponent } from "./app.component";
import { InitialPageComponent } from "./0-initial-page/initial-page.component";
import { FirstPageComponent } from "./1-first-page/first-page.component";
import { ProductService } from "./product/product.service";
import { ProductData } from "./product/product-data";
import { DetailProductComponent } from "./2-detail-product/detail-product.component";
import { TestBuildComponent } from "./test-build/test-build.component";

@NgModule({
    declarations: [
        AppComponent,
        InitialPageComponent,
        FirstPageComponent,
        DetailProductComponent,
        TestBuildComponent,
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
import { Injectable } from "@angular/core";

import { Shoes } from "./product";
import { ProductData } from "./product-data";

@Injectable()

export class ProductService {
    productdata !: Shoes[];
    singleShoes !: Shoes;
    detail_turn_on !: boolean;

    valuePassing !: any;
    passingCode !: string;
    constructor(private sharedata : ProductData) {}

    // Service for passing entire database
    setData() {
        this.productdata = this.sharedata.createDb();
    }
    updateData() {
        this.sharedata.updateDb();
    }
    getData() {
        return this.productdata;
    }

    // Service for passing only one Shoes product
    setShoes(product : Shoes) {
        this.singleShoes = product;
    }
    getShoes() {
        return this.singleShoes;
    }

    setAnyValue(value : any, message : string) {
        this.valuePassing = value;
        this.passingCode = message;
    }
    getAnyValue(message : string) {
        if(message = this.passingCode)
            return this.valuePassing;
    }

    // Boolean value for turning on/off the detail page
}
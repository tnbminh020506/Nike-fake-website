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

    //...............................................................................
    //...........................handling.data.service...............................
    //...............................................................................
    setData() {
        this.productdata = this.sharedata.createDb();
    }
    updateData() {
        this.sharedata.updateDb();
    }
    getData() {
        return this.productdata;
    }

    //...............................................................................
    // ........................passing.contemporary.product..........................
    //...............................................................................
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

    //...............................................................................
    //............................back.end.service...................................
    //...............................................................................
}
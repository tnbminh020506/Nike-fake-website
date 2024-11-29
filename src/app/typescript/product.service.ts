import { Injectable } from "@angular/core";

import { Shoes } from "./product";
import { ProductData } from "./product-data";

@Injectable()

export class ProductService {

    productdata !: Shoes[];
    singleShoes !: Shoes;

    valuePassing : {key : string, value : any}[] = [];

    constructor(private sharedata : ProductData) {}

    //...............................................................................
    //...........................handling.data.service...............................
    //...............................................................................

    setData() {
        this.productdata = this.sharedata.createDb();
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

    setAnyValue(values : any, message : string) {
        let obj = this.valuePassing.find(x => x.key === message);
        if(obj !== undefined)
            obj.value = values;
        else
            this.valuePassing.push({key : message, value : values});
    }
    getAnyValue(messages : string) {
        let obj = this.valuePassing.find(x => x.key === messages);
        if(obj !== undefined)
            return obj.value;
        return "unknown";
    }

    //...............................................................................
    //............................back.end.service...................................
    //...............................................................................
                          

}
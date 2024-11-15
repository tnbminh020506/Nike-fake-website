import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Shoes } from '../product/product';
import { map } from 'rxjs';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css'
})
export class ShopCartComponent {

  constructor(private http_method : HttpClient) {}

  map_array : { [key : string] : string[] } = {};

  Shoes_list : any = [];

  @Output() turn_of_shop_cart = new EventEmitter;

  deactivate_shop_cart() {
    this.turn_of_shop_cart.emit("deativate shop cart");
  }

  product_remove(value : any) {
    this.http_method.delete('http://localhost:5000/product/' + value._id).subscribe((resDatafromDelete : any) => {
      console.log(resDatafromDelete);
      this.http_method.get('http://localhost:5000/product').subscribe((resData : any) => {
        this.Shoes_list = resData;
      });
    })
  }

  ngOnInit() {
    this.http_method.get('http://localhost:5000/product').subscribe((resData : any) => {
      // for(let product of resData) {
      //     if(this.map_array[product.nameOfproduct] != undefined) {
      //     this.map_array[product.nameOfproduct].push(product._id);
      //   }
      //   else
      //     this.map_array[product.nameOfproduct] = [product._id];
      // }

      // for(let x of resData) {
      //   let tmp = Object.assign({}, x, { listOfid : this.map_array[x.nameOfproduct]});
      //   let find_res = this.Shoes_list.find((item : Shoes) => item.nameOfproduct === x.nameOfproduct);
      //   if(find_res === undefined) {
      //     this.Shoes_list.push(tmp);
      //   }
      // }

      // for(let x of this.Shoes_list) {
      //   delete x._id;
      // }
      this.Shoes_list = resData;

    });
  }
}

import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Shoes } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {

  listOfShoes !: Shoes[];
  singleShoes !: Shoes;

  colorsDisplayed !: string[];
  finalColorsString : string = "";
  finalPrice !: string;

  listOfOrigin !: string[];
  finalOrigin : string = "";

  listOfSizes : number[] = [40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5];

  // Assigning values for css
  sticky_block_height : number = 500;
  // Ending css assigning

  @Output() my_own_event = new EventEmitter;

  constructor(private shared : ProductService) { 
      this.shared.setData();
      this.listOfShoes = this.shared.getData();
      this.singleShoes = this.shared.getShoes();
      // this.singleShoes = this.listOfShoes[0];
      this.colorsDisplayed = this.singleShoes.listOfcolors;
      this.listOfOrigin = this.singleShoes.origin;
  }

  ngOnInit() {
    // handling the shown colors string
    for(let str of this.colorsDisplayed) {
      this.finalColorsString = this.finalColorsString + str + "/"
      // console.log(this.finalColorsString);
    }
    
    // console.log(this.finalColorsString)

    this.finalPrice = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.singleShoes.price);
    // this.finalPrice = this.finalPrice.slice(0, -1);
    //.................................................

    for(let str of this.listOfOrigin) {
      this.finalOrigin = this.finalOrigin + str + ", ";
    }
    this.finalColorsString = this.finalColorsString.slice(0, -1);
    this.finalOrigin = this.finalOrigin.slice(0, -2);
  }

  frontPageReturn() {
    this.my_own_event.emit(false);
    console.log("back successful")
  }
}

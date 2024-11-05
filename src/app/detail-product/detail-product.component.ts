import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Shoes } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {

  singleShoes !: Shoes;

  colorsDisplayed !: string[];
  finalColorsString : string = "";
  finalPrice !: string;

  listOfOrigin !: string[];
  finalOrigin : string = "";

  listOfSubImage !: string[];

  // Assigning values for css
  sticky_block_height : number = 500;
  // Ending css assigning

  @Output() previous_page_request_active = new EventEmitter;

  constructor(private shared : ProductService) { 
      this.singleShoes = this.shared.getShoes();
      this.colorsDisplayed = this.singleShoes.listOfcolors;
      this.listOfOrigin = this.singleShoes.origin;
      this.listOfSubImage = this.singleShoes.listOfDetailedImage;
  }

  detail_image_event(value : string) {
    let Dom = document.querySelector('.image-display') as HTMLImageElement;
    if(Dom != undefined) {
      Dom.src = this.singleShoes.folderName + value + this.singleShoes.imageFileType;
      // console.log("change");
    }
  }

  return_request_from_detailpage($event : boolean) {
    this.previous_page_request_active.emit(false);
  }

  colorStringHandle() {
    for(let str of this.colorsDisplayed) {
      this.finalColorsString = this.finalColorsString + str + "/";
      // console.log(this.finalColorsString);
    }
    this.finalColorsString = this.finalColorsString.slice(0, -1);
  }

  originStringHandle() {
    for(let str of this.listOfOrigin) {
      this.finalOrigin = this.finalOrigin + str + ", ";
    }

    this.finalOrigin = this.finalOrigin.slice(0, -2);
  }

  currencyDisplayHandle() {
    this.finalPrice = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.singleShoes.price);
  }

  ngOnInit(): void {

    window.scrollTo(0, 0);

    this.colorStringHandle();
    this.originStringHandle();
    this.currencyDisplayHandle();

      //
  }
}

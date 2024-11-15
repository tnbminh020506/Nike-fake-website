import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Shoes } from '../product/product';
import { ProductService } from '../product/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {

  singleShoes !: Shoes;

  backendShoesSend !: Shoes[];

  colorsDisplayed !: string[];
  finalColorsString : string = "";
  finalPrice !: string;

  listOfOrigin !: string[];
  finalOrigin : string = "";

  listOfSubImage !: string[];

  // Assigning values for css
  sticky_block_height : number = 500;
  // Ending css assigning

  @Output() detail_product_request = new EventEmitter;

  constructor(private shared : ProductService, private http_method : HttpClient) { 
      this.singleShoes = this.shared.getShoes();
      this.colorsDisplayed = this.singleShoes.listOfcolors;
      this.listOfOrigin = this.singleShoes.origin;
      this.listOfSubImage = this.singleShoes.listOfDetailedImage;
  }


  return_page($event : string) {
    console.log($event);
    if($event == "return")
      this.detail_product_request.emit(-1);
    else 
      this.detail_product_request.emit("shop_cart");
  }

  //.....................................................................................................
  //.......................................product.property.handling.....................................
  //.....................................................................................................
  detail_image_event(value : string) {
    let Dom = document.querySelector('.image-display') as HTMLImageElement;
    if(Dom != undefined) {
      Dom.src = this.singleShoes.folderName + value + this.singleShoes.imageFileType;
      // console.log("change");
    }
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

  //.....................................................................................................
  //........................................back.end.service.............................................
  //.....................................................................................................
  add_to_shop_cart(value : Shoes) {
    this.http_method.post('http://localhost:5000/product/create', value).subscribe(() => console.log("add to cart successful"));
    let DOM = document.querySelector(".save-item")    as HTMLElement
    let curr_save_item_text = DOM.innerText;
    DOM.innerHTML = "Save to your shopping cart!";
    DOM.style.backgroundColor = "grey";
    setTimeout(() => {
      DOM.innerHTML = curr_save_item_text;
      DOM.style.backgroundColor = "black";
    }, 700);
    
  }

  ngOnInit() {

    window.scrollTo(0, 0);

    this.colorStringHandle();
    this.originStringHandle();
    this.currencyDisplayHandle();

      //
  }
}

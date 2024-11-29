import { Component, HostListener } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';

import { Shoes } from '../typescript/product';
import { ProductService } from '../typescript/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit, AfterViewInit {

  singleShoes !: Shoes;

  main_image_height !: number;

  backendShoesSend !: Shoes[];

  colorsDisplayed !: string[];
  finalColorsString : string = "";
  finalPrice !: string;

  listOfOrigin !: string[];
  finalOrigin : string = "";

  listOfSubImage !: string[];

  sameShoes : Shoes[] = [];
  sameShoesDisplay : boolean = false;

  // Assigning values for css
  sticky_block_height : number = 500;
  // Ending css assigning

  constructor(private shared : ProductService, private http_method : HttpClient) { 
      this.singleShoes = this.shared.getShoes();
      this.colorsDisplayed = this.singleShoes.listOfcolors;
      this.listOfOrigin = this.singleShoes.origin;
      this.listOfSubImage = this.singleShoes.listOfDetailedImage;
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
  add_to_shop_cart() {
    this.http_method.post('http://localhost:5000/product/create', this.singleShoes).subscribe(() => {
      console.log("add to cart successful");
      console.log(this.singleShoes);
    });

    let DOM = document.querySelector(".save-item")    as HTMLElement
    let curr_save_item_text = DOM.innerText;
    DOM.innerHTML = "Save to your shopping cart!";
    DOM.style.backgroundColor = "grey";
    setTimeout(() => {
      DOM.innerHTML = curr_save_item_text;
      DOM.style.backgroundColor = "black";
    }, 700);
    
  }
  changeProduct(value : Shoes) {
    this.shared.setShoes(value);
    this.singleShoes = value;

    let DOM = document.querySelector(`#button-${value.local_id}`) as HTMLElement;
    DOM.style.width = "19.5%";
    DOM.style.border = "1px solid black";    
    setTimeout(() => {
      DOM.style.width = "20%";
      DOM.style.border = "none";
    }, 80);
  }

  //.....................................................................................................
  //.....................................................................................................
  //.....................................................................................................

  htmlSetUp(value : Shoes) {
    // let DOM = document.querySelector(`#button-${value.local_id}`) as HTMLElement;
    // DOM.style.width = "18%";
  }

  //.....................................................................................................
  //....................................DOM.AfterRender.Handling.........................................
  //.....................................................................................................

  max(a : number, b : number) : number {
    if(a > b)
      return a;
    return b;
  }
  
  change_size_button(wid : number, hei : number) {
    for(let i = 0; i < this.singleShoes.listOfsize.length; i++) {
      let size_DOM = document.querySelector(`#sizes-${i}`) as HTMLElement;
      if(size_DOM !== null) {
        size_DOM.style.width = `${this.max(40, 0.125 * wid)}px`;
        size_DOM.style.height = `${this.max(30, 0.04 * hei)}px`;
        size_DOM.style.fontSize = `${this.max(8, 0.02 * hei)}px`;
      }
    }
  }

  WindowResizing(event : string) {
    let main_image = document.querySelector(".image-display") as HTMLImageElement;
    let navbar = document.querySelector(".navbar") as HTMLDivElement;
    if(main_image !== null && navbar !== null) {
      if(event === "OnInit") {
        // let result = await this.image_load_execute(main_image);
        // console.log(result);
        main_image.onload = () => {
          setTimeout(() => {
            // Noted: all DOM related commands must be run in this setTimeout method. Otherwise the command will be runned first, resulting in an undefined value, because 
            // ...... setTimeout() is an async function, which will be executed after all the normal code be. So even the code logic is accurate (calling function then 
            // ...... console.log....), they'd still be prioritized by typescript / javascript default, then comes the resolve in async function (no "resolve" means that
            // ...... all codes in main_image might be the last ones to be executed)
            navbar.style.height = `${main_image.height}px`;
            this.change_size_button(main_image.width, main_image.height);
          }, 0);
        }
      }
      else {       
        navbar.style.height = `${main_image.height}px`;
        this.change_size_button(main_image.width, main_image.height);
      }
    }
  }

  @HostListener('window:resize', []) 
  onResize() {
    this.WindowResizing("");
  }

  //.....................................................................................................
  //.....................................................................................................
  //.....................................................................................................

  ngOnInit() {

    window.scrollTo(0, 0);

    this.main_image_height = -1;

    this.colorStringHandle();
    this.originStringHandle();
    this.currencyDisplayHandle();
    
    // //
    

    let productlist = this.shared.getData();
    for(let product of productlist) {
      if(this.singleShoes.nameOfproduct === product.nameOfproduct) {
        this.sameShoes.push(product);
      }
    }
    if(this.sameShoes.length !== 0) {
      // console.log(this.sameShoes);
      this.sameShoesDisplay = true;
      for(let ele of this.sameShoes) {
        this.htmlSetUp(ele);
      }
    }

      //
  }
  ngAfterViewInit() {
    this.WindowResizing("OnInit");
  }
}

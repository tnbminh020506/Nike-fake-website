import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private render : Renderer2, private shared : ProductService) {}

  changeTop(value : string) {
    let DOM = document.querySelector('.header') as HTMLElement;
    if(DOM != null) {
      this.render.setStyle(DOM, 'top', value);
    }
  }

  heightValue(value : string) {
    let DOM = document.querySelector(value) as HTMLElement;
    if(DOM != null) {
      let res = String(DOM.offsetHeight) + "px";
      this.shared.setAnyValue(res, "height-of-main-header");
      return res;
    }
    return undefined;
  }

  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {

    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    let topValue : string | undefined = "-" + this.heightValue('.header');
    
    if(topValue != undefined) {
      if (scrollTop > this.lastScrollTop) {
        // Scrolling down
        this.changeTop(topValue);
      } 
      else {
        // Scrolling up
        this.changeTop('0px');
      }      
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For negative scrolling
  }

  @Output() returning_page = new EventEmitter;
  
  Return_previous_page() {
    this.returning_page.emit("return");
  }

  Activate_shop_cart() {
    this.returning_page.emit("shop_cart");
  }
}
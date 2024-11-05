import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { Shoes } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './shoes-page.component.html',
  styleUrl: './shoes-page.component.css'
})

export class FirstPageComponent implements OnInit {
  @Output() detail_page_request_active = new EventEmitter;
  ShoesData !: Shoes[];
  imageUrl !: string[];

  constructor(private sharedata : ProductService, private render : Renderer2) {
    this.ShoesData = this.sharedata.getData();
    // console.log(this.ShoesData);
  }

  changeStyleTop(value : string, compo : string) {
    let DOM = document.querySelector(compo) as HTMLElement;
    if(DOM != null) {
      this.render.setStyle(DOM, 'top', value);
    }
  }

  Event(product : Shoes) {
    this.sharedata.setShoes(product)
    this.detail_page_request_active.emit(true);
  }

  lastScrollTop: number = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {

    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scrolling down
      this.changeStyleTop('0px', '.navbar');
    } 
    else {
      // Scrolling up
      let value = this.sharedata.getAnyValue("height-of-main-header");
      this.changeStyleTop(value, '.navbar');
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0)
    });
    this.changeStyleTop('0px', '.navbar');  
  }

  return_request_from_firstpage($event : boolean) {
    this.detail_page_request_active.emit(false);
  }

  currencyDisplayHandle(value : Shoes) : string {
    return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.price)
  }
}

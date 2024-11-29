import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { Shoes } from '../typescript/product';
import { ProductService } from '../typescript/product.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './shoes-page.component.html',
  styleUrl: './shoes-page.component.css'
})

export class FirstPageComponent implements OnInit {

  ShoesData !: Shoes[];
  imageUrl !: string[];

  constructor(private sharedata : ProductService, private render : Renderer2, private router : Router) {
    this.ShoesData = this.sharedata.getData();
    // console.log(this.ShoesData);
  }
  changeStyleTop(value : string, compo : string) {
    let DOM = document.querySelector(compo) as HTMLElement;
    if(DOM != null) {
      this.render.setStyle(DOM, 'top', value);
    }
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
      if(value !== undefined)
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

  currencyDisplayHandle(value : Shoes) : string {
    return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.price)
  }

  //..............................................................................................
  //.....................................ngIf.method..............................................
  //..............................................................................................
  next_page(product : Shoes) {
    this.sharedata.setShoes(product);
    this.router.navigate(['detail-page', product.nameOfproduct]);
  }
}

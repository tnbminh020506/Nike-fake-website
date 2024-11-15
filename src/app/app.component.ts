import { Component } from '@angular/core';

import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tnbm-Shopping-Website';

  pageison : boolean[] = [false, false, false];

  current_page : number = 0;

  shop_cart_activate : boolean = false;

  constructor(private shared_method : ProductService) {}

  ngOnInit() {
    this.shared_method.setData();
    this.pageison[this.current_page] = true;
  }
  request($event : any) {
    if(typeof $event === "number") {
      this.pageison[this.current_page] = false;
      this.current_page += $event;
      this.pageison[this.current_page] = true;
    }
    else {
      if($event == "shop_cart") {
        this.pageison[this.current_page] = false;
        this.shop_cart_activate = true;
      }
      else {
        this.pageison[this.current_page] = true;
        this.shop_cart_activate = false;
      }
    }
  }
}

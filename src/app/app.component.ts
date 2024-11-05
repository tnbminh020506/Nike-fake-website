import { Component } from '@angular/core';

import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tnbm-Shopping-Website';

  page_0_ison !: boolean;
  page_1_ison !: boolean;
  page_2_ison !: boolean;

  current_page !: number;

  constructor(private shared_method : ProductService) {}

  ngOnInit() {
    this.shared_method.setData();
    this.page_0_ison = true;
    this.page_1_ison = false;
    this.page_2_ison = false;
    this.current_page = 0;
  }
  receiveMessage_from_front_page() {
    this.page_0_ison = false;
    this.page_1_ison = true;
    this.current_page = 1;
  }
  receiveMessage_from_first_page($event : boolean) {
    if($event == true) {
      this.page_1_ison = false;
      this.page_2_ison = true;
      this.current_page = 2;
     
    }
    else {
      this.page_0_ison = true;
      this.page_1_ison = false;
    }
  }
  receiveMessage_from_detail_page($event : boolean) {
    if($event == false) {
      this.page_1_ison = true;
      this.page_2_ison = false;
    }
  }
}

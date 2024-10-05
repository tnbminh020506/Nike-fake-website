import { Component, EnvironmentInjector } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Shoes } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})

export class FirstPageComponent {
  @Output() event = new EventEmitter;
  ShoesData !: Shoes[];
  imageUrl !: string[];

  constructor(private sharedata : ProductService) {
    this.sharedata.setData();
    this.ShoesData = this.sharedata.getData();
    // console.log(this.ShoesData);
  }

  Event(product : Shoes) {
    this.sharedata.setShoes(product)
    this.event.emit(true)
  }
}

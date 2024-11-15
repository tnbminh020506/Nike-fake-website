import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.css'
})
export class InitialPageComponent {

  constructor() {}

  @Output() product_page_request = new EventEmitter;

  goToSite() {
    console.log("Heading to Shopping Site successful!");
    this.product_page_request.emit(1);
  }
}

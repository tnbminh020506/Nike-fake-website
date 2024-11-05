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

  @Output() first_page_request_active = new EventEmitter;

  goToSite() {
    console.log("Heading to Shopping Site successful!");
    this.first_page_request_active.emit();
  }
}

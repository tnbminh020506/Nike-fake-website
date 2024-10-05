import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.css'
})
export class InitialPageComponent {
  constructor() {}

  goToSite() {
    console.log("Heading to Shopping Site successful!");
  }
}

import { Component } from '@angular/core';

import { ProductService } from './typescript/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tnbm-Shopping-Website'

  constructor(private shared_method : ProductService) {}

  ngOnInit() {
    this.shared_method.setData();
  }
}

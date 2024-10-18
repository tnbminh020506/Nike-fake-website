import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tnbm-Shopping-Website';

  page_is_on !: boolean[];

  current_page !: number;

  ngOnInit() {
    this.current_page = 0;
    for(let i = 1; i <= 105; i++) {
      this.page_is_on[i] = false;
    }
    this.page_is_on[0] = true;
  }
  receiveMessage_from_front_page($event : boolean) {
    this.page_is_on[this.current_page] = false;
    this.current_page++;
    this.page_is_on[this.current_page] = true;
  }
  receiveMessage_from_first_page($event : boolean) {
    this.current_page = 2;
  }
  receiveMessage_from_detail_page($event : boolean) {
    this.current_page--;
  }
}

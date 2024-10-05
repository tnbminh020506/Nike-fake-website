import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tnbm-Shopping-Website';

  detail_turn_on : boolean = false;

  receiveMessage_from_front_page($event : boolean) {
    this.detail_turn_on = $event;
  }
  receiveMessage_from_detail_page($event : boolean) {
    this.detail_turn_on = $event;
  }
}

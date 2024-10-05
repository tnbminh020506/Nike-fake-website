import { Component } from '@angular/core';

@Component({
  selector: 'app-test-build',
  templateUrl: './test-build.component.html',
  styleUrl: './test-build.component.css'
})
export class TestBuildComponent {
  constructor() {}
  value : boolean = false;
  Show() {
    this.value = true;
    console.log("message")
  }
  Hide() {
    this.value = false;
  }
}

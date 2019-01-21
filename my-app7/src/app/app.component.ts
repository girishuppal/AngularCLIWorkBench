import { Component } from '@angular/core';

const num = 7;

@Component({
  selector: 'gu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular course demo - by Girish Uppal';
  sayHello() {
    const x = 10;
  }
}

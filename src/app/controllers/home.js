import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: require('../views/home.html'),
  styleUrls: ['./app/styles/home.scss']
})
export class HomeComponent {
  constructor() {
    this.tittle = 'Home';
  }
}

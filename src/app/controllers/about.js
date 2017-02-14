import {Component} from '@angular/core';

@Component({
  selector: 'about',
  template: require('../views/about.html')
})
export class AboutComponent {
  constructor() {
    this.tittle = 'About';
  }
}

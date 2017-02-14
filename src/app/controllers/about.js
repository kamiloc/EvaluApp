import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('../views/about.html')
})
export class AboutComponent {
  constructor() {
    this.tittle = 'About';
  }
}

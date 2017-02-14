import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('../views/hello.html')
})
export class HelloComponent {
  constructor() {
    this.hello = 'Hello World!';
    this.tittle = 'Main';
  }
}

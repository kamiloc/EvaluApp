import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('../views/login.html'),
  styleUrls: ['./app/styles/login.scss']
})
export class LoginComponent {
  constructor() {
    this.tittle = 'Login of Users';
  }
}

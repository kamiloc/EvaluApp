import {Component} from '@angular/core';
const rol = 'learner';

@Component({
  selector: 'fountain-app',
  template: require('../views/register.html'),
  styleUrls: ['./app/styles/register.scss']
})
export class RegisterComponent {
  constructor() {
    switch (rol) {
      case 'tutor':
        this.isTutor = true;
        break;
      case 'learner':
        this.isTutor = false;
        break;
      default:
        break;
    }
    this.isLearner = !this.isTutor;
  }
}

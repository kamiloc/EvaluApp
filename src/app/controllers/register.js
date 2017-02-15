import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('../views/register.html'),
  styleUrls: ['./app/styles/register.scss']
})
export class RegisterComponent {
  form = false;

  changeRoll(event, newRoll) {
    event.preventDefault();
    this.form = true;
    switch (newRoll) {
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

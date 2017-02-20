import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('../views/register.html'),
  styleUrls: ['./app/styles/register.scss']
})
export class RegisterComponent {

  date = {
    name: '', lastName: '',
    email: '', regional: '',
    city: '', program: '',
    card: '', center: '',
    phone: '', password: '',
    position: '', studio: ''
  };

  tittle = 'Register of Users';
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
  newPassword = '';
  confPassword= '';
  changePassword() {
    if (this.newPassword === '') {
      this.confPassword = '';
    }
  }
}

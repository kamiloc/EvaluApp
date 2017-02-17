import {Component} from '@angular/core';
import {Tutor} from './classTutor';

@Component({
  selector: 'profile-tutor',
  template: require('../../views/tutor/profileTutor.html'),
  styleUrls: ['./app/styles/tutor/profileTutor.scss']
})
export class ProfileTutorComponent {
  oldTutor = new Tutor('Gabriel', 'Martines', '489-1340', 'Web UI Developer', 'UX Desing',
  'gabriel.martinez', 'Male', '12345678');
  tutor = new Tutor();
  newPassword = '';
  confPassword = '';
  constructor() {
    this.tittle = 'Edit your information';
    this.form = true;
    this.isTutor = true;
    this.tutor = this.oldTutor;
  }
  changePassword() {
    if (this.newPassword === '') {
      this.confPassword = '';
    }
  }
}

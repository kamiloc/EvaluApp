import {Component} from '@angular/core';

@Component({
  selector: 'profile-tutor',
  template: require('../../views/tutor/profileTutor.html'),
  styleUrls: ['./app/styles/tutor/profileTutor.scss']
})
export class ProfileTutorComponent {
  tutor = {
    name: 'Gabriel', lastName: 'Martines',
    phone: '489-1340', position: 'Web UI Developer', studio: 'UX Desing',
    email: 'gabriel.martinez', gender: 'Male', password: '12345678'};
  constructor() {
    this.tittle = 'Edit your information';
    this.form = true;
    this.isTutor = true;
  }
}

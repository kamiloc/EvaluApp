import {Component} from '@angular/core';

@Component({
  selector: 'profile-tutor',
  template: require('../../views/tutor/profileTutor.html')
//   styleUrls: ['./app/styles/tutor/profileTutor.scss'] Don't need now
})
export class ProfileTutorComponent {
  constructor() {
    this.tittle = 'Edit your information';
  }
}

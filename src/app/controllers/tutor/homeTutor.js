import {Component} from '@angular/core';

@Component({
  selector: 'home-tutor',
  template: require('../../views/tutor/homeTutor.html')
//   styleUrls: ['./app/styles/tutor/homeTutor.scss'] Don't need now
})
export class HomeTutorComponent {
  constructor() {
    this.tittle = 'Welcome Tutor';
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'home-tutor',
  template: require('../../views/tutor/homeTutor.html'),
  styleUrls: ['./app/styles/tutor/homeTutor.scss']
})
export class HomeTutorComponent {
  constructor() {
    this.tittle = 'Welcome Master';
    this.learners = 3;
    this.tittle = 'Learners';
    this.message = 'They are your trooper, ready to learn all you can take. The evaluation is a requisit, please submit the form';
  }
}

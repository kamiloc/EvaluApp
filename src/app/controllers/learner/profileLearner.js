import {Component} from '@angular/core';
const Roll = 'learner';

@Component({
  selector: 'fountain-app',
  template: require('../../views/learner/profileLearner.html'),
  styleUrls: ['./app/styles/learner/profileLearner.scss']
})
export class ProfileLearnerComponent {

  constructor() {
    switch (Roll) {
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

import {Component} from '@angular/core';
const rol = 'Tutor';

@Component({
  selector: 'nav-bar',
  template: require('../views/nav-bar.html')
})
export class NavBarComponent {
  hidden = true;
  constructor() {
    switch (rol) {
      case 'Tutor':
        this.isTutor = true;
        this.elements = {firstView: 'New Evaluation', secondView: 'View Learners', thirdView: 'Profile Manager', home: '/homeTutor'};
        break;

      case 'Learner':
        this.isTutor = false;
        this.elements = {fourthView: 'New Binnacle', fivethView: 'Profile Manager', home: '/homeLearner'};
        break;

      default:
        this.hidden = false;
        break;
    }
    this.isLearner = !this.isTutor;
  }
}

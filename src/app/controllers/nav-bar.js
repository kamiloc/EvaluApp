import {Component} from '@angular/core';
const rol = 'Learner';

@Component({
  selector: 'nav-bar',
  template: require('../views/nav-bar.html')
})
export class NavBarComponent {
  constructor() {
    switch (rol) {
      case 'Tutor':
        this.isTutor = true;
        this.elements = {firstView: 'New Evaluation', secondView: ['Learner Manager', 'View Learners', 'Edit Learnes'], thirdView: 'Profile Manager', home: '/homeTutor'};
        break;

      case 'Learner':
        this.isTutor = false;
        this.elements = {fourthView: 'New Binnacle', fivethView: 'Profile Manager', home: '/homeLearner'};
        break;

      default:
        break;
    }
    this.isLearner = !this.isTutor;
  }
}

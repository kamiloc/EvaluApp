import {Component} from '@angular/core';
const rol = 'Tutor';

@Component({
  selector: 'nav-bar',
  template: require('../views/nav-bar.html')
})
export class NavBarComponent {
  constructor() {
    switch (rol) {
      case 'Tutor':
        this.isTutor = true;
        this.elements = {firstView: 'New Evaluation', secondView: ['Learner Manager', 'New Learner', 'Edit Learnes'], thirdView: 'Profile Manager'};
        break;

      case 'Learner':
        this.isTutor = false;
        this.elements = {fourthView: 'New Binnacle', fivethView: 'Profile Manager'};
        break;

      default:
        break;
    }
    this.isLearner = !this.isTutor;
  }
}

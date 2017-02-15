import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('../../views/learner/homeLearner.html'),
  styleUrls: ['./app/styles/learner/homeLearner.scss']
})
export class HomeLearnerComponent {
  constructor() {
    this.tittle = 'Welcome Learner';
  }
}

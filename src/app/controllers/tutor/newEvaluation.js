import {Component} from '@angular/core';

@Component({
  selector: 'new-evaluation',
  template: require('../../views/tutor/newEvaluation.html')
//   styleUrls: ['./app/styles/tutor/newEvaluation.scss'] Don't need now
})
export class NewEvaluationComponent {
  constructor() {
    this.tittle = 'Make a new evaluation';
  }
}

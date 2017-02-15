import {Component} from '@angular/core';

@Component({
  selector: 'view-learners',
  template: require('../../views/tutor/viewLearners.html')
//   styleUrls: ['./app/styles/tutor/viewLearners.scss'] Don't need now
})
export class ViewLearnersComponent {
  constructor() {
    this.tittle = 'View all of your learners';
  }
}

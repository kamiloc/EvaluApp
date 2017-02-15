import {Component} from '@angular/core';

@Component({
  selector: 'edit-learners',
  template: require('../../views/tutor/editLearners.html')
//   styleUrls: ['./app/styles/tutor/editLearner.scss'] Don't need now
})
export class EditLearnersComponent {
  constructor() {
    this.tittle = 'Edit learners';
  }
}

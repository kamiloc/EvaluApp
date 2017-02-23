import {Component, Input} from '@angular/core';

@Component({
  selector: 'factor',
  template: require('./factors.html'),
  styleUrls: ['./app/styles/tutor/newEvaluation.scss']
})
export class FactorsComponent {
  constructor() {
    this.collapsed = [true, true, true, true, true, true, true, true];
  }
  @Input() item;
}

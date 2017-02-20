import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('../../views/learner/profileLearner.html'),
  styleUrls: ['./app/styles/learner/profileLearner.scss']
})
export class ProfileLearnerComponent {

  learner = {
    name: 'Carlos Stiven', lastName: 'Robayo Castillo',
    email: 'carlos.robayo', regional: 'Cundinamarca',
    city: 'Girardot', program: 'Analisis y desarrollo de sistemas de informacion',
    card: '902917', center: 'Centro de la tecnologia del diseño y la productividad empresarial',
    phone: '3114436081', password: '97071215044'
  };

  newPassword = '';
  confPassword= '';

  constructor() {
    this.isLearner = true;
  }

  changePassword() {
    if (this.newPassword === '') {
      this.confPassword = '';
    }
  }

}

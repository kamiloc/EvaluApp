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

  onChangePassword() {
    if (this.newPassword === '') {
      this.confPassword = '';
    }
  }
  changedPassword() {
    let disable = true;
    if (this.newPassword === '') {
      disable = false;
    } else if (this.newPassword === this.confPassword) {
      this.tutor.password = this.newPassword;
      disable = false;
    } else {
      disable = true;
    }
    return disable;
  }
  cancel() {
    window.location = 'homeLearner';
  }

}

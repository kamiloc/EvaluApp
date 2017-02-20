import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('../../views/learner/newBinnacle.html'),
  styleUrls: ['./app/styles/learner/newBinnacle.scss']
})
export class NewBinnacleComponent {

  groupCard = '';
  numDocument = '';

  tutor = {
    name: 'Gabriel Martines', phone: '489-1340',
    position: 'Web UI Developer', email: 'gabriel.martinez'
  };

  company = {
    name: 'Sistemas Colombia SAS', nit: '900218578',
    city: 'Bogota', address: 'Carrera 14 # 97-63',
    phone: '489-1340'
  };

}

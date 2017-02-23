import {Component} from '@angular/core';
import {Learner} from '../learner/classLearner';

const Cristian = new Learner('1033802131', 'Cristian', 'Barreto', 'cristian.barreto',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN', 'Centro de Electricidad Electrónica y Comunicaciones',
'901540', 'Bogotá DC', 'Distrito Capital', '3186182636', 'Male', 'gabriel.martinez');
const Duvan = new Learner('1023445671', 'Duvan', 'Ruiz', 'duvan.ruiz',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN', 'Centro de Electricidad Electrónica y Comunicaciones',
'901345', 'La Dorada', 'Caldas', '3113453341', 'Male', 'gabriel.martinez');
const Carlos = new Learner('1073630259', 'Carlos', 'Robayo', 'carlos.robayo',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN', 'Centro de la tecnología del diseño y la productividad empresarial',
'902917', 'Girardot', 'Cundinamarca', '3114436081', 'Male', 'gabriel.martinez');
const Daniel = new Learner('1032245664', 'Daniel', 'Fierro', 'daniel.fierro',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN', 'Centro de la tecnología, el diseño y la productividad empresarial',
'903465', 'Girardot', 'Cundinamarca', '313405564', 'Male', 'gabriel.martinez');
const Vanessa = new Learner('1003567960', 'Vanessa', 'Monsalve', 'vanessa.monsalve',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN', 'Centro de la tecnología del diseño y la productividad empresarial',
'902917', 'Girardot', 'Cundinamarca', '3228571260', 'Female', 'gabriel.martinez');
const learnersList = [Cristian, Duvan, Carlos, Daniel, Vanessa];

@Component({
  selector: 'view-learners',
  template: require('../../views/tutor/viewLearners.html'),
  styleUrls: ['./app/styles/tutor/viewLearners.scss']
})
export class ViewLearnersComponent {
  More = '';
  constructor() {
    this.isCollapsed = true;
    this.tittle = 'View all of your learners';
    this.Learners = learnersList;
  }
}

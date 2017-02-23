import {Component} from '@angular/core';
import {Learner} from '../learner/classLearner';
const Cristian = new Learner('1033802131', 'Cristian', 'Barreto', 'cristian.barreto',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORACIÓN', 'Centro de Electricidad Electrónica y Comunicaciones',
'901540', 'Bogotá DC', 'Distrito Capital', '3186182636', 'Male', 'gabriel.martinez');
const Duvan = new Learner('1023445671', 'Duvan', 'Ruiz', 'duvan.ruiz',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORACIÓN', 'Centro de Electricidad Electrónica y Comunicaciones',
'901345', 'La Dorada', 'Caldas', '3113453341', 'Male', 'gabriel.martinez');
const Carlos = new Learner('1022345767', 'Carlos', 'Robayo', 'carlos.robayo',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORACIÓN', 'Centro de la tecnología, el diseño y la productividad empresarial',
'903465', 'Girardot', 'Cundinamarca', '3186182636', 'Male', 'gabriel.martinez');
const Daniel = new Learner('1032245664', 'Daniel', 'Fierro', 'daniel.fierro',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORACIÓN', 'Centro de la tecnología, el diseño y la productividad empresarial',
'903465', 'Girardot', 'Cundinamarca', '313405564', 'Male', 'gabriel.martinez');
const Vanessa = new Learner('10243334', 'Vanessa', 'Monsalve', 'vanessa.monsalve',
'12345678', 'ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORACIÓN', 'Centro de la tecnología, el diseño y la productividad empresarial',
'903465', 'Girardot', 'Cundinamarca', '3134645578', 'Male', 'gabriel.martinez');
@Component({
  selector: 'new-evaluation',
  template: require('../../views/tutor/newEvaluation.html'),
  styleUrls: ['./app/styles/tutor/newEvaluation.scss', './app/styles/learner/newBinnacle.scss']
})
export class NewEvaluationComponent {
  alternative = [];
  alternativeSelected = 2
  alternativeChecked = false;
  informSelected = false;
  informType1 = false;
  informType2 = false;
  collapsed = [true, true, true, true];
  collapsed1 = [true, true, true, true, true, true, true];
  constructor() {
    this.tittle = 'Make a new evaluation';
    this.Learners = [Cristian, Duvan, Carlos, Daniel, Vanessa];
    this.page = 1;
    this.alternative.map(() => false);
    this.acttituteFactors = [{
      title: 'Intership relations',
      body: 'Develops interpersonal relations with the people of the different levels of the conforming entity in a harmonious, respectful and framed form within the principles of social coexistence.',
      number: 0
    },
    {
      title: 'Team Work',
      body: 'Participates actively and purposefully in work teams assuming roles, according to their strengths.',
      number: 1
    },
    {
      title: 'Problems Solution',
      body: 'Proposes alternatives of solution to problematic situations, in the context of the development of its productive stage.',
      number: 2
    },
    {
      title: 'Accomplishment',
      body: 'Assumes commitments of the functions and responsibilities assigned in the development of their work.',
      number: 3
    },
    {
      title: 'Organization',
      body: 'Demonstrates ability to order and arrange the necessary elements and information to facilitate the execution of a work and the achievement of the objectives.',
      number: 4
    }];
    this.tecFactors = [{
      title: 'Transfer of knowledge',
      body: 'Demonstrates the specific competencies of the training program in real work situations.',
      number: 0
    },
    {
      title: 'Continuous improvement',
      body: 'It contributes to the improvement of the own processes of its performance.',
      number: 1
    },
    {
      title: 'Occupational strength',
      body: 'Self-management actions that strengthen your occupational profile within the framework of your life project.',
      number: 2
    },
    {
      title: 'Opportunity and quality',
      body: 'Presents with opportunity and quality the products generated in the development of its functions and activities.',
      number: 3
    },
    {
      title: 'Environmental responsibility',
      body: 'It manages the resources for the development of its activities with criteria of environmental responsibility.',
      number: 4
    },
    {
      title: 'Resource management',
      body: 'It uses in a rational way the materials, equipment and tools supplied for the performance of its activities or functions.',
      number: 5
    },
    {
      title: 'Occupational and industrial safety',
      body: 'It uses the elements of occupational health and safety in accordance with the current regulations established for its activities or functions.',
      number: 6
    },
    {
      title: 'Production stage documentation',
      body: 'Permanently updates the portfolio of evidence.',
      number: 7
    }];
  }
  alternativeSlect() {
    for (let i = 0; i <= this.alternative.length; i++) {
      if (this.alternative[i]) {
        this.alternativeSelected = i;
      }
    }
    return this.alternativeSelected;
  }
  alternativeChange() {
    this.alternativeChecked = !this.alternativeChecked;
  }
}

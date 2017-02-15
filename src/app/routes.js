import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
// Sign in and Sign Up
import {LoginComponent} from './controllers/login';
import {RegisterComponent} from './controllers/register';
//  Tutor Components
import {HomeTutorComponent} from './controllers/tutor/homeTutor';
import {NewEvaluationComponent} from './controllers/tutor/newEvaluation';
import {ProfileTutorComponent} from './controllers/tutor/profileTutor';
import {ViewLearnersComponent} from './controllers/tutor/viewLearners';
import {EditLearnersComponent} from './controllers/tutor/editLearners';
//  LearnerComponents
import {HomeLearnerComponent} from './controllers/learner/homeLearner';
import {ProfileLearnerComponent} from './controllers/learner/profileLearner';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent { }

export const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'homeTutor',
    component: HomeTutorComponent
  },
  {
    path: 'newEvaluation',
    component: NewEvaluationComponent
  },
  {
    path: 'profileTutor',
    component: ProfileTutorComponent
  },
  {
    path: 'viewLearners',
    component: ViewLearnersComponent
  },
  {
    path: 'editLearners',
    component: EditLearnersComponent
  },
  {
    path: 'homeLearner',
    component: HomeLearnerComponent
  },
  {
    path: 'profileLearner',
    component: ProfileLearnerComponent
  }
];

export const routing = RouterModule.forRoot(routes);

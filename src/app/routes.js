import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
<<<<<<< HEAD
import {HomeComponent} from './controllers/home';
import {AboutComponent} from './controllers/about';
import {LoginComponent} from './controllers/login';
import {RegisterComponent} from './controllers/register';
=======
//  Tutor Components
import {HomeTutorComponent} from './controllers/tutor/homeTutor';
import {NewEvaluationComponent} from './controllers/tutor/newEvaluation';
import {ProfileTutorComponent} from './controllers/tutor/profileTutor';
import {ViewLearnersComponent} from './controllers/tutor/viewLearners';
import {EditLearnersComponent} from './controllers/tutor/editLearners';
//  LearnerComponents
>>>>>>> develop
import {HomeLearnerComponent} from './controllers/learner/homeLearner';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent { }

export const routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
<<<<<<< HEAD
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
=======
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
>>>>>>> develop
  },
  {
    path: 'homeLearner',
    component: HomeLearnerComponent
  }
];

export const routing = RouterModule.forRoot(routes);

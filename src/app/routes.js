import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './controllers/home';
import {AboutComponent} from './controllers/about';
import {HomeLearnerComponent} from './controllers/learner/homeLearner';
import {ProfileLearnerComponent} from './controllers/learner/profileLearner';

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
    path: 'homeLearner',
    component: HomeLearnerComponent
  },
  {
    path: 'profileLearner',
    component: ProfileLearnerComponent
  }
];

export const routing = RouterModule.forRoot(routes);

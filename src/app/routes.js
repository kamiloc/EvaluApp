import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './controllers/home';
import {AboutComponent} from './controllers/about';
import {LoginComponent} from './controllers/login';
import {RegisterComponent} from './controllers/register';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'homeLearner',
    component: HomeLearnerComponent
  }
];

export const routing = RouterModule.forRoot(routes);

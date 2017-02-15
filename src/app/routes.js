import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HelloComponent} from './controllers/hello';
import {HomeComponent} from './controllers/home';
import {AboutComponent} from './controllers/about';
import {HomeLearnerComponent} from './controllers/learner/homeLearner';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes = [
  {
    path: '',
    component: HelloComponent
  },
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
  }
];

export const routing = RouterModule.forRoot(routes);

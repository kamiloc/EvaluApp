import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {NavBarComponent} from './controllers/nav-bar';
import {HomeComponent} from './controllers/home';
import {AboutComponent} from './controllers/about';
import {HomeLearnerComponent} from './controllers/learner/homeLearner';
import {ProfileLearnerComponent} from './controllers/learner/profileLearner';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    HomeLearnerComponent,
    ProfileLearnerComponent
  ],
  bootstrap: [RootComponent, NavBarComponent]
})

// let tutor_ = ['Home', 'New Evaluation', 'Learner Manager', 'View', 'Edit', 'Profile Manager'];
export class AppModule { }

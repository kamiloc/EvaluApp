import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {NavBarComponent} from './controllers/nav-bar';
// Sign in and Sign Up
import {LoginComponent} from './controllers/login';
import {RegisterComponent} from './controllers/register';
//  Tutor Components
import {HomeTutorComponent} from './controllers/tutor/homeTutor';
import {NewEvaluationComponent} from './controllers/tutor/newEvaluation';
import {ProfileTutorComponent} from './controllers/tutor/profileTutor';
import {ViewLearnersComponent} from './controllers/tutor/viewLearners';
import {EditLearnersComponent} from './controllers/tutor/editLearners';
//  Learner Components
import {HomeLearnerComponent} from './controllers/learner/homeLearner';
import {ProfileLearnerComponent} from './controllers/learner/profileLearner';
import {NewBinnacleComponent} from './controllers/learner/newBinnacle';
// NgBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot()
  ],
  declarations: [
    RootComponent,
    NavBarComponent,
    HomeLearnerComponent,
    ProfileLearnerComponent,
    LoginComponent,
    RegisterComponent,
    HomeTutorComponent,
    NewEvaluationComponent,
    ProfileTutorComponent,
    ViewLearnersComponent,
    EditLearnersComponent,
    HomeLearnerComponent,
    NewBinnacleComponent
  ],
  bootstrap: [RootComponent, NavBarComponent]
})

export class AppModule { }

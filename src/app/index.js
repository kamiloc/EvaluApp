import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes';
import {NavBarComponent} from './controllers/nav-bar';
import {FooterComponent} from './controllers/footer';
// Sign in and Sign Up
import {LoginComponent} from './controllers/login';
import {RegisterComponent} from './controllers/register';
//  Tutor Components
import {HomeTutorComponent} from './controllers/tutor/homeTutor';
import {NewEvaluationComponent} from './controllers/tutor/newEvaluation';
import {ProfileTutorComponent} from './controllers/tutor/profileTutor';
import {ViewLearnersComponent} from './controllers/tutor/viewLearners';
import {FactorsComponent} from './controllers/tutor/components/factors';
//  Learner Components
import {HomeLearnerComponent} from './controllers/learner/homeLearner';
import {ProfileLearnerComponent} from './controllers/learner/profileLearner';
import {NewBinnacleComponent} from './controllers/learner/newBinnacle';
// NgBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    NgbModule.forRoot()
  ],
  declarations: [
    RootComponent,
    NavBarComponent,
    FooterComponent,
    HomeLearnerComponent,
    ProfileLearnerComponent,
    LoginComponent,
    RegisterComponent,
    HomeTutorComponent,
    NewEvaluationComponent,
    ProfileTutorComponent,
    FactorsComponent,
    ViewLearnersComponent,
    HomeLearnerComponent,
    NewBinnacleComponent
  ],
  bootstrap: [RootComponent, NavBarComponent, FooterComponent]
})

export class AppModule { }

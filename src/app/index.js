import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {NavBarComponent} from './controllers/nav-bar';
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
//  Learner Components
>>>>>>> develop
import {HomeLearnerComponent} from './controllers/learner/homeLearner';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    NavBarComponent,
<<<<<<< HEAD
    HomeComponent,
    AboutComponent,
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent,
=======
=======
>>>>>>> develop
    HomeTutorComponent,
    NewEvaluationComponent,
    ProfileTutorComponent,
    ViewLearnersComponent,
    EditLearnersComponent,
>>>>>>> develop
    HomeLearnerComponent
  ],
  bootstrap: [RootComponent, NavBarComponent]
})

// let tutor_ = ['Home', 'New Evaluation', 'Learner Manager', 'View', 'Edit', 'Profile Manager'];
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {NavBarComponent} from './controllers/nav-bar';
//  Tutor Components
import {HomeTutorComponent} from './controllers/tutor/homeTutor';
import {NewEvaluationComponent} from './controllers/tutor/newEvaluation';
import {ProfileTutorComponent} from './controllers/tutor/profileTutor';
import {ViewLearnersComponent} from './controllers/tutor/viewLearners';
import {EditLearnersComponent} from './controllers/tutor/editLearners';
//  Learner Components
import {HomeLearnerComponent} from './controllers/learner/homeLearner';

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
    HomeTutorComponent,
    NewEvaluationComponent,
    ProfileTutorComponent,
    ViewLearnersComponent,
    EditLearnersComponent,
    HomeLearnerComponent
  ],
  bootstrap: [RootComponent, NavBarComponent]
})

// let tutor_ = ['Home', 'New Evaluation', 'Learner Manager', 'View', 'Edit', 'Profile Manager'];
export class AppModule { }

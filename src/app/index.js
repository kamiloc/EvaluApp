import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HelloComponent} from './controllers/hello';
import {HomeComponent} from './controllers/home';
import {AboutComponent} from './controllers/about';
import {HomeLearnerComponent} from './controllers/learner/homeLearner';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    HomeLearnerComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}

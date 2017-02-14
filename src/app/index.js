import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HelloComponent} from './controllers/hello';
import {HomeComponent} from './controllers/home';
import {AboutComponent} from './controllers/about';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}

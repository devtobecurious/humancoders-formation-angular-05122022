import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfieModule } from './features/selfie/selfie.module';
import { PocComponent } from './poc/poc.component';
import { LoggerService } from './shared/tools/logger.service';
import { DiscoverObservableComponent } from './shared/learnings/discover-observable/discover-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    PocComponent,
    DiscoverObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SelfieModule
  ],
  providers: [
    // LoggerService, ça se faisait comme ça avant angular 7
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

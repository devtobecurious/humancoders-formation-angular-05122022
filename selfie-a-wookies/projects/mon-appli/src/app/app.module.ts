import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfieModule } from './features/selfie/selfie.module';
import { PocComponent } from './poc/poc.component';
import { LoggerService } from './shared/tools/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    PocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SelfieModule
  ],
  providers: [
    // LoggerService, ça se faisai comme ça avant angular 7
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

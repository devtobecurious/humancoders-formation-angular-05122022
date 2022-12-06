import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfieModule } from './features/selfie/selfie.module';
import { PocComponent } from './poc/poc.component';

@NgModule({
  declarations: [
    AppComponent,
    PocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelfieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

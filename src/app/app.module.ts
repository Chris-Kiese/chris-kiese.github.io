import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YesComponent } from './components/yes/yes.component';
import { NoComponent } from './components/no/no.component';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    HomeComponent,
    YesComponent,
    NoComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

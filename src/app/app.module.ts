import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppRouters } from './app.routes';
import { DataService } from './data/data.service';


import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthenticationModule,
    FlexLayoutModule,
    AppRouters,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA4VNii-cu5TZ7q9b1QOgkd8avf2TsGoAM",
      authDomain: "mynotes-ffc84.firebaseapp.com",
      databaseURL: "https://mynotes-ffc84.firebaseio.com",
      projectId: "mynotes-ffc84",
      storageBucket: "mynotes-ffc84.appspot.com",
      messagingSenderId: "804610199676"
    }),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: "AIzaSyA7UeqYDNNpgEvmb1BdNIdoDCZEZzSVuc0",
  authDomain: "fb-authentication-a83bc.firebaseapp.com",
  databaseURL: "https://fb-authentication-a83bc.firebaseio.com",
  projectId: "fb-authentication-a83bc",
  storageBucket: "fb-authentication-a83bc.appspot.com",
  messagingSenderId: "708428500639",
  appId: "1:708428500639:web:e9a482d380f9e040cd9caa",
  measurementId: "G-W7V5X2RRCT"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

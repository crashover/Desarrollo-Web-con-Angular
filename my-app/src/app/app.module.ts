import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PageNotFoundComponent } from './pageNotFound/page.not.found.component';
import { InitComponent } from './init.component';
import { TicketDetail } from './tickets/ticket.detail';
//input
import { InputComponent } from './input/input.component'
//pipes
import { ConversorPipe } from './pipes/conversor.pipe'

//directives
import { HighlightDirective } from './directives/highlight.directive'
import { GigantDirective } from './directives/gigant.directive'

//service
import { TicketService } from './services/ticket.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './services/counter';

//routes
import { RouterModule, Routes }from '@angular/router';
import { APPROUTER } from './commons/router';

//firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

//material
import { MaterialModule } from '@angular/material';
import 'hammerjs';

export const firebaseConfig={
    apiKey: "AIzaSyDWIOAF0BfpmQO0a2FO2wJ4r-E9det2bAU",
    authDomain: "angular-willy.firebaseapp.com",
    databaseURL: "https://angular-willy.firebaseio.com",
    storageBucket: "angular-willy.appspot.com",
    messagingSenderId: "417130248446"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup,
}

import { ButtonModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    HighlightDirective,
    GigantDirective,
    PageNotFoundComponent,
    InitComponent,
    TicketDetail
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer}),
    RouterModule.forRoot(APPROUTER),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    MaterialModule.forRoot()
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }

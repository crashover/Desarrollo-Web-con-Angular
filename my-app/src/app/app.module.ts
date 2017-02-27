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

export const firebaseConfig={
    apiKey: "AIzaSyDsID6QCYwikSBKGYPziP5hIsfaTbkpsLs",
    authDomain: "my-app-c3b4e.firebaseapp.com",
    databaseURL: "https://my-app-c3b4e.firebaseio.com",
    storageBucket: "my-app-c3b4e.appspot.com",
    messagingSenderId: "929281286134"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup,
}

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
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer}),
    RouterModule.forRoot(APPROUTER),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }

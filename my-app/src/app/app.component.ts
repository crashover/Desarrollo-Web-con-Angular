import { Component } from '@angular/core';

import {InputComponent} from './input/input.component';

import { TicketService} from './services/ticket.service';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/observable';

interface AppState{
  counter: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  votacion = '';
  tickets:any;

  myForm : FormGroup;

  counter: Observable<number>;

  constructor(
    private ticketService : TicketService,
    private fb: FormBuilder,
    private store: Store<AppState>
    ){

      this.counter = store.select('counter');
    this.tickets = ticketService.getTicket();

    this.myForm = fb.group({
      'name': ['Jorge']

    });

  }

  votos = [
    {title: 'opción 1'},
    {title: 'opción 2'},
    {title: 'opción 3'},
    {title: 'opción 4'}
  ];

  addVoto(response:string){
    this.votacion = "usted elegio : " + response;
  }

  cantidad = 5;
  factor = 1

  onSubmit(value:string):void{
    console.log("El Formulario tiene", value);
  }

  increment(){
    this.store.dispatch({type: INCREMENT});
  }

  decrement(){
    this.store.dispatch({type: DECREMENT});
  }

  reset(){
    this.store.dispatch({type: RESET});
  }

}
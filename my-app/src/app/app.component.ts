import { Component, NgZone } from '@angular/core';

import {InputComponent} from './input/input.component';

import { TicketService} from './services/ticket.service';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/observable';

import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';

interface AppState{
  counter: number;
}
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  votacion = '';
  tickets:any;

  myForm : FormGroup;

  counter: Observable<number>;
  ticketFirebase:any;

  constructor(
    private ticketService : TicketService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private _ngZone:NgZone,
    private router: Router,
    private af : AngularFire
    ){

    this.ticketFirebase = (af.database.list('/ticket'));
/*
    this.ticketFirebase.push({
      'id': 1, 'titulo': 'no me funciona la impresora', 'estado': 'in progress'
    })

    this.ticketFirebase.push({
      'id': 2, 'titulo': 'no me funciona la computadora', 'estado': 'finish'
    })

    this.ticketFirebase.push({
      'id': 3, 'titulo': 'no me funciona el celular', 'estado': 'in progress'
    })

    this.ticketFirebase.push({
      'id': 4, 'titulo': 'no me funciona una lampara', 'estado': 'really'
    })

*/
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });

    this.counter = store.select('counter');
    this.tickets = ticketService.getTickets();

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

  progress: number = 0;
  label: string;

  processOutsideOfAngularZone(){
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(
      () =>{ console.log("finalizado sin ngzone");
      });
  }

  processWithingAngularZone(){
    this.label="inside";
    this.progress = 0;
    this._ngZone.runOutsideAngular(()=> {
      this._increaseProgress(()=> {
        this._ngZone.run(()=> {console.log("Finalizado con ngZone")});
      })
    })
  }

  _increaseProgress(doneCallBack: ()=> void){
    this.progress+=1;
    console.log(`Progreso: ${this.progress}%`);
    if(this.progress<100){
      window.setTimeout(()=>{
        this._increaseProgress(doneCallBack);
      },10);
    }
    else {
      doneCallBack();
    }
  };

  verTicket(id:number):void{
    this.router.navigate(['/ticket', id]);
  }

  updateTicket(key):void{
    console.log(key);
    this.ticketFirebase.update(key, {estado: 'in progress'});
  }

  removeTicket(key):void{
    console.log(key);
    this.ticketFirebase.remove(key);
  }

  removeAllTicket():void{
    this.ticketFirebase.remove();
  }

}
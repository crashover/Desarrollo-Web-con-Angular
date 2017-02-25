import { Component } from '@angular/core';

import {InputComponent} from './input/input.component';

import { TicketService} from './services/ticket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';
  tickets:any;

  constructor(private ticketService : TicketService) {
    this.tickets = ticketService.getTicket();
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
}
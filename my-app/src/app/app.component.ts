import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'willy bardales'


eventoClick():void{
  this.name = this.name.toUpperCase();
  console.log("ALGUIEN HIZO CLICK");
}

}
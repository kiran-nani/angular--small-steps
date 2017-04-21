import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myValue = 12;
  myValueChange($event){
  	this.myValue = $event.value;
  }
}

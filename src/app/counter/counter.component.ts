import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counterValue;

  @Output() counterChange = new EventEmitter();

  decrement(){
  	this.counterValue--;
  	this.counterChange.emit({
  		value: this.counterValue
  	})
  }
  
  increment(){
  	this.counterValue++;
  	this.counterChange.emit({
  		value: this.counterValue
  	})
  }	

  ngOnInit() {
  }

}

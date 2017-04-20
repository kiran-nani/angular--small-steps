import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counterValue;

  constructor() { 

  }

  ngOnInit() {
  }

}

// imports all the nessesary classes, interfaces and services
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { IData } from '../../model/data';

@Component({ // component configurations 
  selector: 'metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit, AfterViewInit {
  //data: variable to bind data to this component
  @Input() data: IData;

  // direction variable for test
  rotationTest;

  // direction variable for maintainablity
  rotationMain;

  // direction variable for security
  rotationSec;

  // direction variable for workability
  rotationWork;

  constructor() { }
  ngAfterViewInit() {


  }

// set arrow direction on init
  ngOnInit() {
    if (this.data.metrics.test.state == "raising") {
      this.rotationTest = "up";
    } else {
      this.rotationTest = "down";
    }

    if (this.data.metrics.maintainability.state == "raising") {
      this.rotationMain = "up";
    } else {
      this.rotationMain = "down";
    }

    if (this.data.metrics.security.state == "raising") {
      this.rotationSec = "right";
    } else {
      this.rotationSec = "left";
    }

    if (this.data.metrics.workmanship.state == "raising") {
      this.rotationWork = "right";
    } else {
      this.rotationWork = "left";
    }
  }

}

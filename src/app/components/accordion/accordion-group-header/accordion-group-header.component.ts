// imports all the nessesary classes, interfaces and services
import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../../../model/data';

// component configurations
@Component({ // component configurations 
  selector: 'accordion-group-header',
  templateUrl: './accordion-group-header.component.html',
  styleUrls: ['./accordion-group-header.component.scss']
})
export class AccordionGroupHeaderComponent implements OnInit {

  @Input() data: IData;


  // variable for build icon svg  
  buildIcon = '../../../../assets/icons/firewall.svg';

  //variabele for svg icon color
  svgColor = "#b71c1c"

  // Setter getter for isOpen variable
  // isOpen variable is used to maintain expand contract state of accordion 
  private _isOpen: boolean = false;
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    this.data.timestamp
  }
  get isOpen() {
    return this._isOpen;
  }

  // variable to hold calculated metrics progress value
  metricsProgressValue: number;


  // state of the element
  state;
  constructor() {

  }
  // calculates metrics progress vallue on component initialization
  ngOnInit() {
    this.metricsProgressValue = ((this.data.metrics.maintainability.value + this.data.metrics.security.value + this.data.metrics.test.value + this.data.metrics.workmanship.value) / 400) * 100;
    this.metricsProgressValue = parseFloat(this.metricsProgressValue.toFixed(0));

    this.state = this.data.state;
    if (this.data.type == "firewall" && this.data.state == "complete") {
      this.state = "Accepted"
    }
  }
}

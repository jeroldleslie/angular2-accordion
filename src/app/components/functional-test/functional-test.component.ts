// imports all the nessesary classes, interfaces and services
import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../../model/data';

@Component({ // component configurations 
  selector: 'functional-test',
  templateUrl: './functional-test.component.html',
  styleUrls: ['./functional-test.component.css']
})
export class FunctionalTestComponent {
  //data: variable to bind data to this component
  @Input() data: IData;
  constructor() { }

  //method returns pass percentage of funtional test
  getPassPercent() {
    let total = parseInt(this.data.functional_test.pass + "") + parseInt(this.data.functional_test.failed + "");
    return Math.round(100 * parseInt(this.data.functional_test.pass + "") / total);
  }

}

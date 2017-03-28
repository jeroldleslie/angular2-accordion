import { Component, Input } from '@angular/core';
import { IData } from '../../model/data';
@Component({ // component configurations 
  selector: 'unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.scss']
})
export class UnitTestComponent {
  @Input() data: IData;
  
  constructor() { }

  getPassPercent() {
    let total = parseInt(this.data.unit_test.pass+"") + parseInt(this.data.unit_test.failed+"");
    return Math.round(100 * parseInt(this.data.unit_test.pass+"") / total);
  }
}

// imports all the nessesary classes, interfaces and services
import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../../model/data';


@Component({ // component configurations 
  selector: 'mBuild',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent {

  //data: variable to bind data to this component
  @Input() data: IData;
  constructor() { }

}

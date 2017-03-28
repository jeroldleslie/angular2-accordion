// imports all the nessesary classes, interfaces and services
import { Component, Input } from '@angular/core';

@Component({ // component configurations 
  selector: 'content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent {

  //content box title variable
  @Input() title = "";

  //style variable on state 
  @Input() bClass: string;

  constructor() {

  }

}

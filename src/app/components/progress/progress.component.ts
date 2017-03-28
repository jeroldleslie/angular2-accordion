import { Component, Input, AfterViewInit } from '@angular/core';

@Component({ // component configurations 
  selector: 'progress-bar',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements AfterViewInit {
  //percent:number = 50;
  // [ngStyle]="{'width':'percentageWidth%'}"
  @Input() value:number = 50;
  @Input() bgColor:string;
  
  constructor() { 
  }
  ngAfterViewInit() {
    
  }

}

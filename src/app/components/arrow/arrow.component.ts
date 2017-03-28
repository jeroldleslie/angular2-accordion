// imports all the nessesary classes, interfaces and services
import { Component, OnInit, Input } from '@angular/core';

// component configurations
@Component({ // component configurations 
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})

export class ArrowComponent implements OnInit {
  // variable to hold the state of the arrow
  // options are raising,falling
  @Input() state: string;

  // value of the arrow
  @Input() value: number = 0;

  // direction of the arrow
  @Input() rotation: string = "up";

  arrowSrc = '../../../assets/icons/arrowGreen.svg';
  constructor() { }

  // check and select svg arrow on component init
  ngOnInit() {
    if (this.state == 'raising') {
      this.arrowSrc = '../../../assets/icons/arrowGreen.svg';
    } else {
      this.arrowSrc = '../../../assets/icons/arrowRed.svg';
    }
  }
}

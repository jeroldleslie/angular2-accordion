
// imports all the nessesary classes, interfaces and services
import { Component, OnDestroy, Input, trigger, transition, style, animate } from '@angular/core';
import { Accordion } from '../accordion.component';
import { IData } from '../../../model/data';
import { SnackBarService } from '../../../services/snack-bar.service';

// component definitions
@Component({ // component configurations 
  // name of the html tag to be used to use this component
  selector: 'accordion-group',
  // accrdion expand contract animation
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('200ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('200ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
  // html temlate path for this component
  templateUrl: './accordion-group.component.html',
  // styles for this component
  styleUrls: ['./accordion-group.component.scss']
})
export class AccordionGroup implements OnDestroy {

  //data: variable to bind data to this component
  @Input() data: IData;

  // constructor have parameters accordion, snackBarService
  // accordion: main accordion to add or remove accordion group 
  // snackbar to fire snack bar when needed
  constructor(private accordion: Accordion, private snackBarService: SnackBarService) {
    this.accordion.addGroup(this);
  }

  // Setter getter for isOpen variable
  // isOpen variable is used to maintain expand contract state of accordion 
  private _isOpen: boolean = false;
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  get isOpen() {
    return this._isOpen;
  }


  // angular life hook method called when component destroys
  // removes accordion group from accordion
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  // toogle method to toogle between expand and contract accordion data 
  // called when accordion data header is clicked
  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    if (this.data.state == "rejected" ||
      this.data.state == "complete") {
      this.isOpen = !this.isOpen;
    } else {
      this.snackBarService.fire(this.data.type + " is in progress...");
    }
  }

}

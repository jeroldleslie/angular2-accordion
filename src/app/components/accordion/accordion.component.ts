// imports all the nessesary classes, interfaces and services
import { Component, OnInit } from '@angular/core';
import { AccordionGroup } from './accordion-group/accordion-group.component';

// component configurations
@Component({ // component configurations 
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  host: {
    'class': 'panel-group'
  }
})
export class Accordion {

  constructor() { }

  // variable to hold accordion group as array
  groups: Array<AccordionGroup> = [];

  // add accordin to the accordion group array
  addGroup(group: AccordionGroup): void {
    this.groups.push(group);
  }

  // close other accordion group when one accordion group is click . 
  // maintains only one accordion in expand state
  closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {

        group.isOpen = false;
      }
    });
  }

  // removes accordion group from accordion group array
  removeGroup(group: AccordionGroup): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }

}

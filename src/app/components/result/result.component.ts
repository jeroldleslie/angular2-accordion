import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../../model/data';

@Component({ // component configurations 
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() data: IData;
  constructor() { }

  showDeploy: boolean = false;
  showMerge: boolean = false;
  showFail:boolean = false;

  titleContent = "none";
  resultContent = "none";

  titleClass = "titleGreen";
  resultClass = "resultGreen";

  ngOnInit() {
    if (this.data.type == "build") {
      if (this.data.result == 'pass') {
        this.showDeploy = true;
        this.titleContent = "";
        this.titleClass = "titleGreen";
        this.resultClass = "resultGreen";
      } else {
        this.showFail = false;
        this.titleContent = "";
        this.titleClass = "titleRed";
        this.resultClass = "resultRed";
      }
    }

    if (this.data.type == "firewall") {
      if (this.data.result == 'pass') {
        this.showMerge = true;
        this.titleContent = "change accepted";
        this.titleClass = "titleYellow";
        this.resultClass = "resultYellow";
      } else {
        this.showFail = true;
        this.titleContent = "";
        this.titleClass = "titleRed";
        this.resultClass = "resultRed";
      }
    }
  }

}

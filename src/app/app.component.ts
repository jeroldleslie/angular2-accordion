// imports all the nessesary classes, interfaces and services
import { Component, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SnackBarService } from './services/snack-bar.service';
import { DataService } from './services/data.service';
import { IData } from './model/data';

@Component({ // component configurations 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //toaster class variable whhich holds the dynamic class name of the toaster
  toasterClass = "";

  // variable to hold message for toaster
  msg = "";

  //data: variable to bind data to this component
  datas: IData[];

  // constructor of the AppComponent
  // have two parameters snackBarService, _dataService
  // snackBarService: to show or hide SnackBar
  // _dataService: service is used to get data
  constructor(private snackBarService: SnackBarService, private _dataService: DataService) {

  }

  // load data on  component init
  ngOnInit(): void {
    this.loadUI();
  }

  // method to load data by using dataservice
  loadUI(): void {
    this._dataService.staticQuery().subscribe((datas: IData[]) => {
      this.datas = datas;
    });
  }

  // method to show SnackBar
  // only one parameneter 
  // msg: message of the snackbar
  showSnackBar(msg) {
    this.msg = msg;
    this.toasterClass = "show";
    setTimeout(() => {
      this.toasterClass = "";
    }, 2000)
  }

  //angular life hook after view created
  // have listener for snackbar using snackBarService
  ngAfterViewInit() {
    this.snackBarService.on().subscribe((msg) => {
      this.showSnackBar(msg);
    });
  }
}



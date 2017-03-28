import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private _http:Http) { }

  staticQuery(): any {
    return this._http.get('data/data.json')
      .map((res) => {
        return res.json();
      });
  }
}

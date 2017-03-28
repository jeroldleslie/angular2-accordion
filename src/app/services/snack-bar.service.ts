import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Broadcaster } from '../interfaces/broadcaster';

@Injectable()
export class SnackBarService {

  constructor(private broadcaster: Broadcaster) { }

  fire(data: string): void {
    this.broadcaster.broadcast("snakbar", data);
  }

  on(): Observable<string> {
    return this.broadcaster.on<string>("snakbar");
  }
}

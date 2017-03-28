import { TestBed, inject } from '@angular/core/testing';

import { SnackBarService } from './snack-bar.service';
import { Broadcaster } from '../interfaces/broadcaster';

describe('SnackBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackBarService, Broadcaster]
    });
  });

  it('should initiate SnackBarService', inject([SnackBarService], (service: SnackBarService) => {
    expect(service).toBeTruthy();
  }));

  it('should broadcast and receive event data', inject([SnackBarService], (service: SnackBarService) => {
    service.on().subscribe((msg) => {
      expect(msg).toEqual("test data");
    });
    service.fire("test data");   
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { IData } from '../../model/data';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    const mockData = {
      "build_id": "id123",
      "owner": "swami",
      "timestamp": "8/17/2016 12:05 AM",
      "state": "pending",
      "type": "build",
      "result": "pass",
      "result_detail": "Complete",
      "metrics": {
        "process_completed": 45,
        "test": {
          "value": 45,
          "state": "raising"
        },
        "maintainability": {
          "value": 68,
          "state": "raising"
        },
        "security": {
          "value": 76,
          "state": "raising"
        },
        "workmanship": {
          "value": 42,
          "state": "raising"
        }
      },
      "build": {
        "process_completed": 56,
        "timestamp": "8/17/2016 12:05 AM"
      },
      "unit_test": {
        "process_completed": 67,
        "pass": 45,
        "failed": 55,
        "code_covered": 65
      },
      "functional_test": {
        "process_completed": 76,
        "pass": 45,
        "failed": 55,
        "code_covered": 65
      }
    };

    component.data = mockData;
    // component.ngOnInit();
    fixture.detectChanges();

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

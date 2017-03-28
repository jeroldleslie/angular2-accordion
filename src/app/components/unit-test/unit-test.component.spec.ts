import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnitTestComponent } from './unit-test.component';
import { ContentBoxComponent } from '../content-box/content-box.component';
import { ProgressComponent } from '../progress/progress.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

import { ModalModule } from 'ng2-bootstrap/modal';

describe('UnitTestComponent', () => {
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

  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnitTestComponent,
        ContentBoxComponent,
        ProgressComponent,
        PieChartComponent
      ],
      imports: [ ModalModule.forRoot() ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('height should greater than 0', async(() => {
    el = fixture.nativeElement;
    expect(el.clientHeight).toBeGreaterThan(0);
  }));

  it('width should greater than 0', async(() => {
    el = fixture.nativeElement;
    expect(el.clientWidth).toBeGreaterThan(0);
  }));

  it('should render title as Unit Test', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    let acc: ContentBoxComponent = compiled.querySelector('content-box');
    expect(acc.title).toEqual('Unit Test');
  }));

  it('test getPassPercent() method', async(() => {
    expect(component.getPassPercent()).toEqual(45);
  }));

  it('test data is undefined', async(() => {
    expect(component.data).toBeDefined();
  }));

  it('test percentContent text', () => {
    const compiled = fixture.debugElement.nativeElement;
    let content = compiled.querySelector('.percentContent');
    expect(el.textContent).toContain('tests passed');
  });

  it('test codecovered value', () => {
    const compiled = fixture.debugElement.nativeElement;
    let content = compiled.querySelector('#codecoveredd');
    expect(content.textContent).toContain(component.data.unit_test.code_covered + "%");
  });
});


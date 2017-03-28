// imports all the nessesary classes, interfaces and services
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

import { ModalModule } from 'ng2-bootstrap/modal';

import { AccordionGroup } from './components/accordion/accordion-group/accordion-group.component';
import { AccordionGroupHeaderComponent } from './components/accordion/accordion-group-header/accordion-group-header.component';
import { Accordion } from './components/accordion/accordion.component';
import { ResultComponent } from './components/result/result.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';
import { FunctionalTestComponent } from './components/functional-test/functional-test.component';
import { BuildComponent } from './components/build/build.component';
import { ProgressComponent } from './components/progress/progress.component'
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

import { DataService } from './services/data.service'
import { SnackBarService } from './services/snack-bar.service';
import { Broadcaster } from './interfaces/broadcaster';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions, RequestMethod } from '@angular/http';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Accordion,
        AccordionGroup,
        AccordionGroupHeaderComponent,
        ResultComponent,
        MetricsComponent,
        UnitTestComponent,
        FunctionalTestComponent,
        BuildComponent,
        ProgressComponent,
        ContentBoxComponent,
        ArrowComponent,
        PieChartComponent
      ],
      imports: [ ModalModule.forRoot() ],
      providers: [
        Broadcaster,
        SnackBarService,
        { provide: DataService, useClass: MockDataService }
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render header titles in a accordion tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let acc = compiled.querySelector('accordion');
    expect(acc.textContent).toContain('Changelist / Build');
    expect(acc.textContent).toContain('Owner');
    expect(acc.textContent).toContain('Time Started');
    expect(acc.textContent).toContain('State');
    expect(acc.textContent).toContain('Metrics');
    expect(acc.textContent).toContain('Build');
    expect(acc.textContent).toContain('Unit Test');
    expect(acc.textContent).toContain('Owner');
    expect(acc.textContent).toContain('Functional Test');
  }));

  it('should get datas on init', async(() => {
    component.ngOnInit();
    expect(component.datas.length).toBe(1);
    expect(component.datas[0].result).toEqual("pass");
  }));

  it('toasterClass should be empty on init', async(() => {
    expect(component.toasterClass).toEqual("");
  }));

  it('toasterClass should be empty on init', async(() => {
    expect(component.msg).toEqual("");
  }));

  it('height should greater than 0', async(() => {
    el = fixture.nativeElement;
    expect(el.clientHeight).toBeGreaterThan(0);
  }));

  it('width should greater than 0', async(() => {
    el = fixture.nativeElement;
    expect(el.clientWidth).toBeGreaterThan(0);
  }));

});

class MockDataService {
  // Observable showAlertItem source
  // private _result = new BehaviorSubject<any>(0);
  staticQuery(): any {
    let project = new ReplaySubject(1);
    let result = [{
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
    }];
    let response = new Response(new ResponseOptions({ body: JSON.stringify(result) }))
    //let obs = new Observable<Response>();
    return Observable.of(result);
  }

}
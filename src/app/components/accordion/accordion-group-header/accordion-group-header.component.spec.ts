// imports all the nessesary classes, interfaces and services
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionGroupHeaderComponent } from './accordion-group-header.component';
import { ProgressComponent } from '../../progress/progress.component';

describe('AccordionGroupHeaderComponent', () => {
  let component: AccordionGroupHeaderComponent;
  let fixture: ComponentFixture<AccordionGroupHeaderComponent>;
  let el: HTMLElement;

   // configure test bed before eac test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccordionGroupHeaderComponent,
        ProgressComponent
      ]
    })
      .compileComponents();
  }));

// create component before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupHeaderComponent);
    component = fixture.componentInstance;

    // variable holding mock data for testing
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
    component.isOpen = false;
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

  it('test accordion headers with value', () => {
    const compiled = fixture.debugElement.nativeElement;
    let content = compiled.querySelector('span');

    console.log(content.textContent);
    expect(content.textContent).toContain(component.data.build_id);
  });

  it('test accordion progress-bar value', () => {
    const compiled = fixture.debugElement.nativeElement;
    let content = compiled.querySelector('progress-bar');
    console.log(content.textContent);
    expect(content.textContent).toContain(component.data.metrics.process_completed+"%");
  });
});

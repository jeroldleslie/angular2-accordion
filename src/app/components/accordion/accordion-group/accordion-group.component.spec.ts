import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGroup } from './accordion-group.component';
import { AccordionGroupHeaderComponent } from '../accordion-group-header/accordion-group-header.component';
import { ProgressComponent } from '../../progress/progress.component';
import { Accordion } from '../accordion.component';
import { SnackBarService } from '../../../services/snack-bar.service';
import { Broadcaster } from '../../../interfaces/broadcaster';

describe('AccordionGroup', () => {
  let component: AccordionGroup;
  let fixture: ComponentFixture<AccordionGroup>;
  let el: HTMLElement;

  // configure test bed before eac test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccordionGroup,
        AccordionGroupHeaderComponent,
        ProgressComponent
      ],
      providers: [
        Accordion,
        SnackBarService,
        Broadcaster
      ]
    })
      .compileComponents();
  }));

  // create component before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroup);
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
});

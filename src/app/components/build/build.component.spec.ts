// imports all the nessesary classes, interfaces and services
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildComponent } from './build.component';
import { ContentBoxComponent } from '../content-box/content-box.component';
import { ModalModule } from 'ng2-bootstrap/modal';

describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;
  let el: HTMLElement;

  // configure test bed before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuildComponent,
        ContentBoxComponent
      ],
      imports: [ModalModule.forRoot()]
    })
      .compileComponents();
  }));

  // create component before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(BuildComponent);
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

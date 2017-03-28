import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;

    component.value = 50;
    component.bgColor = "pending";

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

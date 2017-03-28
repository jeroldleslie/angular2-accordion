// imports all the nessesary classes, interfaces and services
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;
  let el: HTMLElement;

  // create test bed before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartComponent]
    })
      .compileComponents();
  }));

  // create component before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
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

  it('canvas height should 100', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    el = compiled.querySelector('canvas');
    expect(el.clientHeight).toEqual(100);
  }));

  it('canvas width should 100', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    el = compiled.querySelector('canvas');
    expect(el.clientWidth).toEqual(100);
  }));

});

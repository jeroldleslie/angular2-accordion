// imports all the nessesary classes, interfaces and services
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrowComponent } from './arrow.component';


describe('ArrowComponent', () => {
  let component: ArrowComponent;
  let fixture: ComponentFixture<ArrowComponent>;
  let el: HTMLElement;

  // configure test bed before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowComponent]
    })
      .compileComponents();
  }));

  // create component before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowComponent);
    component = fixture.componentInstance;

    component.state = "raising";
    component.value = 0;
    component.rotation = "up";

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

  it('test arrow value', () => {
    const compiled = fixture.debugElement.nativeElement;
    let content = compiled.querySelector('.innerDiv');
    expect(content.textContent).toContain(component.value + "%");
  });

  it('test rotation value not empty', () => {
    expect(component.rotation.length).toBeGreaterThan(0);
  });


  it('test arrowSrc', () => {
    if (component.state == 'raising') {
      expect(component.arrowSrc).toEqual('../../../assets/icons/arrowGreen.svg');
    } else {
      expect(component.arrowSrc).toEqual('../../../assets/icons/arrowRed.svg');
    }
  });
});

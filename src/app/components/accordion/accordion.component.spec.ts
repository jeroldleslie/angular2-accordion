// imports all the nessesary classes, interfaces and services
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Accordion } from './accordion.component';

describe('AccordionComponent', () => {
  let component: Accordion;
  let fixture: ComponentFixture<Accordion>;

  // configure test bed before eac test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Accordion]
    })
      .compileComponents();
  }));

  // create component before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(Accordion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header titles in a accordion tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div').textContent).toContain('Changelist / Build');
    expect(compiled.querySelector('div').textContent).toContain('Owner');
    expect(compiled.querySelector('div').textContent).toContain('Time Started');
    expect(compiled.querySelector('div').textContent).toContain('State');
    expect(compiled.querySelector('div').textContent).toContain('Metrics');
    expect(compiled.querySelector('div').textContent).toContain('Build');
    expect(compiled.querySelector('div').textContent).toContain('Unit Test');
    expect(compiled.querySelector('div').textContent).toContain('Owner');
    expect(compiled.querySelector('div').textContent).toContain('Functional Test');
  }));

  it('should get element by given css header', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let de = fixture.debugElement.query(By.css('header'));
  }));

  it('should get element by given css accordion', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let de = fixture.debugElement.query(By.css('accordion'));
  }));


});


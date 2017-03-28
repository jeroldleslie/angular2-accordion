// imports all the nessesary classes, interfaces and services
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentBoxComponent } from './content-box.component';


describe('ContentBoxComponent', () => {
  let component: ContentBoxComponent;
  let fixture: ComponentFixture<ContentBoxComponent>;
  // configure test bed before eac test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentBoxComponent]
    })
      .compileComponents();
  }));

  // create component before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBoxComponent);
    component = fixture.componentInstance;
    component.bClass = "pending";
    component.title = "test";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



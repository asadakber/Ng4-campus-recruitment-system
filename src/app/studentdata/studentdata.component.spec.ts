import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdataComponent } from './studentdata.component';

describe('StudentdataComponent', () => {
  let component: StudentdataComponent;
  let fixture: ComponentFixture<StudentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

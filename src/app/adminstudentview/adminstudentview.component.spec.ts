import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstudentviewComponent } from './adminstudentview.component';

describe('AdminstudentviewComponent', () => {
  let component: AdminstudentviewComponent;
  let fixture: ComponentFixture<AdminstudentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstudentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstudentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

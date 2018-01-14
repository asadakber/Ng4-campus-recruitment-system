import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjobviewComponent } from './adminjobview.component';

describe('AdminjobviewComponent', () => {
  let component: AdminjobviewComponent;
  let fixture: ComponentFixture<AdminjobviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminjobviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminjobviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

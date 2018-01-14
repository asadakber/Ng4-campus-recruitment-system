import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincompanyviewComponent } from './admincompanyview.component';

describe('AdmincompanyviewComponent', () => {
  let component: AdmincompanyviewComponent;
  let fixture: ComponentFixture<AdmincompanyviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincompanyviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincompanyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

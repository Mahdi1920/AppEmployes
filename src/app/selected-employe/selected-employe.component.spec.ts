import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedEmployeComponent } from './selected-employe.component';

describe('SelectedEmployeComponent', () => {
  let component: SelectedEmployeComponent;
  let fixture: ComponentFixture<SelectedEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

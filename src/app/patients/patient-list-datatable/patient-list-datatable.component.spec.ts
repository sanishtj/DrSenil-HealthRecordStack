import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListDatatableComponent } from './patient-list-datatable.component';

describe('PatientListDatatableComponent', () => {
  let component: PatientListDatatableComponent;
  let fixture: ComponentFixture<PatientListDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

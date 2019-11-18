import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsDatepickerComponent } from './hrs-datepicker.component';

describe('HrsDatepickerComponent', () => {
  let component: HrsDatepickerComponent;
  let fixture: ComponentFixture<HrsDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

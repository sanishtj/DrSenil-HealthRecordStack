import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsValidationMessageComponent } from './hrs-validation-message.component';

describe('HrsValidationMessageComponent', () => {
  let component: HrsValidationMessageComponent;
  let fixture: ComponentFixture<HrsValidationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsValidationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsFormGroupComponent } from './hrs-form-group.component';

describe('HrsFormGroupComponent', () => {
  let component: HrsFormGroupComponent;
  let fixture: ComponentFixture<HrsFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

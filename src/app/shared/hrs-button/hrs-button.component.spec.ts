import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsButtonComponent } from './hrs-button.component';

describe('HrsButtonComponent', () => {
  let component: HrsButtonComponent;
  let fixture: ComponentFixture<HrsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsWidgetComponent } from './hrs-widget.component';

describe('HrsWidgetComponent', () => {
  let component: HrsWidgetComponent;
  let fixture: ComponentFixture<HrsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

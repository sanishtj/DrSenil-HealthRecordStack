import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulationListComponent } from './consulation-list.component';

describe('ConsulationListComponent', () => {
  let component: ConsulationListComponent;
  let fixture: ComponentFixture<ConsulationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

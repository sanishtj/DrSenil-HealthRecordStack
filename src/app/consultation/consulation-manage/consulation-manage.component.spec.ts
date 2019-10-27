import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulationManageComponent } from './consulation-manage.component';

describe('ConsulationManageComponent', () => {
  let component: ConsulationManageComponent;
  let fixture: ComponentFixture<ConsulationManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulationManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulationManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

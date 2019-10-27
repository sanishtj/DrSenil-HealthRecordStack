import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostloginContainerComponent } from './postlogin-container.component';

describe('PostloginContainerComponent', () => {
  let component: PostloginContainerComponent;
  let fixture: ComponentFixture<PostloginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostloginContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostloginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

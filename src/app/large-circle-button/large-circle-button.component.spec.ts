import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCircleButtonComponent } from './large-circle-button.component';

describe('LargeCircleButtonComponent', () => {
  let component: LargeCircleButtonComponent;
  let fixture: ComponentFixture<LargeCircleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeCircleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeCircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

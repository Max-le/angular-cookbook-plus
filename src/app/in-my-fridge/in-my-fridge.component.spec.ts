import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMyFridgeComponent } from './in-my-fridge.component';

describe('InMyFridgeComponent', () => {
  let component: InMyFridgeComponent;
  let fixture: ComponentFixture<InMyFridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMyFridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMyFridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

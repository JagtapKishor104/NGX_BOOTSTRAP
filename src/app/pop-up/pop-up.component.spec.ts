import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponents } from './pop-up.component';

describe('PopupComponents', () => {
  let component: PopupComponents;
  let fixture: ComponentFixture<PopupComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupComponents ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

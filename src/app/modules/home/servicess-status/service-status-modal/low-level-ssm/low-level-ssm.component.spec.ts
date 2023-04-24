/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LowLevelSsmComponent } from './low-level-ssm.component';

describe('LowLevelSsmComponent', () => {
  let component: LowLevelSsmComponent;
  let fixture: ComponentFixture<LowLevelSsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowLevelSsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowLevelSsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

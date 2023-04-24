/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HightLevelSsmComponent } from './hight-level-ssm.component';

describe('HightLevelSsmComponent', () => {
  let component: HightLevelSsmComponent;
  let fixture: ComponentFixture<HightLevelSsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightLevelSsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightLevelSsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

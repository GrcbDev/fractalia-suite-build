/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediumLevelSsmComponent } from './medium-level-ssm.component';

describe('MediumLevelSsmComponent', () => {
  let component: MediumLevelSsmComponent;
  let fixture: ComponentFixture<MediumLevelSsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumLevelSsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumLevelSsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartUpComponent } from './start-up.component';

describe('StartUpComponent', () => {
  let component: StartUpComponent;
  let fixture: ComponentFixture<StartUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

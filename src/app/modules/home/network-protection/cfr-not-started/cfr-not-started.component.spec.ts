/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CfrNotStartedComponent } from './cfr-not-started.component';

describe('CfrNotStartedComponent', () => {
  let component: CfrNotStartedComponent;
  let fixture: ComponentFixture<CfrNotStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfrNotStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfrNotStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

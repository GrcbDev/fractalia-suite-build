/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InOneClickComponent } from './in-one-click.component';

describe('InOneClickComponent', () => {
  let component: InOneClickComponent;
  let fixture: ComponentFixture<InOneClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOneClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOneClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

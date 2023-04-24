import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericInfoComponent } from './generic-info.component';

describe('GenericInfoComponent', () => {
  let component: GenericInfoComponent;
  let fixture: ComponentFixture<GenericInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

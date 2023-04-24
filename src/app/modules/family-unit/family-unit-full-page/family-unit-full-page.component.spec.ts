import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyUnitFullPageComponent } from './family-unit-full-page.component';

describe('FamilyUnitFullPageComponent', () => {
  let component: FamilyUnitFullPageComponent;
  let fixture: ComponentFixture<FamilyUnitFullPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyUnitFullPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyUnitFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationRiskLevelsComponent } from './information-risk-levels.component';

describe('InformationRiskLevelsComponent', () => {
  let component: InformationRiskLevelsComponent;
  let fixture: ComponentFixture<InformationRiskLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationRiskLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationRiskLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

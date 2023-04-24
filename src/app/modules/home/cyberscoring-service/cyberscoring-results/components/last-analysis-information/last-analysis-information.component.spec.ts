import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAnalysisInformationComponent } from './last-analysis-information.component';

describe('LastAnalysisInformationComponent', () => {
  let component: LastAnalysisInformationComponent;
  let fixture: ComponentFixture<LastAnalysisInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastAnalysisInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAnalysisInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

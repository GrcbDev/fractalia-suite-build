import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextAnalysisComponent } from './next-analysis.component';

describe('NextAnalysisComponent', () => {
  let component: NextAnalysisComponent;
  let fixture: ComponentFixture<NextAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

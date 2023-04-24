import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalScoringGraphComponent } from './historical-scoring-graph.component';

describe('HistoricalScoringGraphComponent', () => {
  let component: HistoricalScoringGraphComponent;
  let fixture: ComponentFixture<HistoricalScoringGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalScoringGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalScoringGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

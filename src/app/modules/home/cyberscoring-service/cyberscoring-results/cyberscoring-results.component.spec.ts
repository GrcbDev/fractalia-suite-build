import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberscoringResultsComponent } from './cyberscoring-results.component';

describe('CyberscoringResultsComponent', () => {
  let component: CyberscoringResultsComponent;
  let fixture: ComponentFixture<CyberscoringResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberscoringResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberscoringResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

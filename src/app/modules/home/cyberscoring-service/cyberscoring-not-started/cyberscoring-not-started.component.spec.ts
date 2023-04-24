import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberscoringNotStartedComponent } from './cyberscoring-not-started.component';

describe('CyberscoringNotStartedComponent', () => {
  let component: CyberscoringNotStartedComponent;
  let fixture: ComponentFixture<CyberscoringNotStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberscoringNotStartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberscoringNotStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

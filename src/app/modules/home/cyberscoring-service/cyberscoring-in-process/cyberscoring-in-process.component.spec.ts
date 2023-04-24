import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberscoringInProcessComponent } from './cyberscoring-in-process.component';

describe('CyberscoringInProcessComponent', () => {
  let component: CyberscoringInProcessComponent;
  let fixture: ComponentFixture<CyberscoringInProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberscoringInProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberscoringInProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

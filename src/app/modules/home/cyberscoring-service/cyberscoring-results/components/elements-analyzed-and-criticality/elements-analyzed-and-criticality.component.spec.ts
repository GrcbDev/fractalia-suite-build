import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsAnalyzedAndCriticalityComponent } from './elements-analyzed-and-criticality.component';

describe('ElementsAnalyzedAndCriticalityComponent', () => {
  let component: ElementsAnalyzedAndCriticalityComponent;
  let fixture: ComponentFixture<ElementsAnalyzedAndCriticalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsAnalyzedAndCriticalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsAnalyzedAndCriticalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

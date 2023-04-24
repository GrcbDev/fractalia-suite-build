import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicSubtitleComponent } from './graphic-subtitle.component';

describe('GraphicSubtitleComponent', () => {
  let component: GraphicSubtitleComponent;
  let fixture: ComponentFixture<GraphicSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicSubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

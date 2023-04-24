import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteUserProfileComponent } from './delte-user-profile.component';

describe('DelteUserProfileComponent', () => {
  let component: DelteUserProfileComponent;
  let fixture: ComponentFixture<DelteUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelteUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelteUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

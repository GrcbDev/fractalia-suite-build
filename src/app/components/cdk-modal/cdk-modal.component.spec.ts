import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CDKModalComponent } from './cdk-modal.component';


describe('ModalComponent', () => {
  let component: CDKModalComponent;
  let fixture: ComponentFixture<CDKModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDKModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDKModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

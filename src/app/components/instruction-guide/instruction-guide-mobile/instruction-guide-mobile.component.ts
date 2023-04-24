import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CDKModalRef } from '../../cdk-modal/services/cdk-modal-ref';
import { SliderComponent } from '../../slider/slider.component';

@Component({
  selector: 'app-instruction-guide-mobile',
  templateUrl: './instruction-guide-mobile.component.html',
  styleUrls: ['./instruction-guide-mobile.component.scss']
})
export class InstructionGuideMobileComponent implements OnInit {
  userName = '';
  partnerName = '';
  staticContentUrl: string = environment.STATIC_CONTENT;
  instructionConfig: any;
  isLoading = true;

  @ViewChild(SliderComponent) slider: SliderComponent;
  constructor(
    private modalRef: CDKModalRef,
  ) {
  }

  ngOnInit() {
    const data = this.modalRef.config.data;
    this.instructionConfig = data.instructionConfig;
    this.userName = data.userName;
    this.partnerName = data.partnerName;
    this.isLoading = false;
  }

  closeModal() {
    this.modalRef.close();
  }

  doNotShowAgain(show: boolean) {
    if(show) {
      localStorage.setItem('dontShowMobileGuidedTourAgain','true');
    } else {
      localStorage.removeItem('dontShowMobileGuidedTourAgain');
    }
  }

  finalize() {
    localStorage.setItem('dontShowMobileGuidedTourAgain', 'true');
    this.closeModal();
  }

  onNextStep(target: string) {
    this.slider.nextPage();
    // const find = this.instructionsGuideCards.findIndex(x => x == target);
    // if(find >= 0) {
    //   const currentStep = this.instructionsGuideCards[find];
    //   const nextStep = this.instructionsGuideCards[find+1];
    //   this.setActionToStep(currentStep, false);
    //   this.setActionToStep(nextStep, true);
    // }
  }

}

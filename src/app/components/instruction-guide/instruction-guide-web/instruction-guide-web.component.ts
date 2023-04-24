import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruction-guide-web',
  templateUrl: './instruction-guide-web.component.html',
  styleUrls: ['./instruction-guide-web.component.scss']
})
export class InstructionGuideWebComponent implements OnInit {
  @Input() instructionConfig: any;

  configJumbotromStep: any;
  configJumbotromCard: any;

  configServicesStep: any;
  configServicesCard: any;

  configFamilyMenuStep: any;
  configFamilyMenuCard: any;

  configHomeMenuStep: any;
  configHomeMenuCard: any;

  configFirstStep: any;
  configFirstCard: any;

  showFirstStep = true;
  showHomeMenu = false;
  showFamilyMenu = false;
  showServices = false;
  showJumbotrom = false;

  finalized = false;
  @Input() userName: string = 'Julito';
  @Input() partnerName: string = 'Fractalia';

  instructionsGuideCards: any[] = [];
  // temporalCheckBox =
  constructor() {
    const body = document.getElementById("main-body");
    body.classList.add('modal-open');
  }

  ngOnInit() {
    this.initialSetupList();
    if(this.instructionConfig.hasHomeMenu) this.setHomeMenuSetup();
    if(this.instructionConfig.hasFamilyMenu) this.setFamilyMenuSetup();
    if(this.instructionConfig.hasServices) this.setServicesSetup();
    if(this.instructionConfig.hasJumbotrom) this.setJumbotromSetup();
  }


  closeModal(){
    this.finalized = true;
    this.removeBodyClass();
  }

  removeBodyClass(){
    const body = document.getElementById("main-body");
    body.classList.remove('modal-open');
  }

  onNextStep(target: string) {
    const find = this.instructionsGuideCards.findIndex(x => x == target);
    if(find >= 0) {
      const currentStep = this.instructionsGuideCards[find];
      const nextStep = this.instructionsGuideCards[find+1];
      this.setActionToStep(currentStep, false);
      this.setActionToStep(nextStep, true);
    }
  }

  setActionToStep(step: string, action: boolean) {
    switch (step) {
      case 'startedStep':
        this.showFirstStep = action;
        break;
      case 'hasHomeMenu':
        this.showHomeMenu = action;
        break;
      case 'hasFamilyMenu':
        this.showFamilyMenu = action;
      break;
      case 'hasServices':
        this.showServices = action;
      break;
      case 'hasJumbotrom':
        this.showJumbotrom = action;
      break;
      }
  }

  doNotShowAgain(show: boolean) {
    if(show) {
      localStorage.setItem('dontShowWebGuidedTourAgain', 'true');
    } else {
      localStorage.removeItem('dontShowWebGuidedTourAgain');
    }
  }


  finalize() {
    localStorage.setItem('dontShowWebGuidedTourAgain', 'true');
    this.closeModal();
  }

  setJumbotromSetup() {
    const jumbotrom = document.getElementById("jumbotrom");
    const config = jumbotrom.getBoundingClientRect();
    this.configJumbotromStep = {
      top: (config.top - 10) + 'px',
      left: (config.left - 10) +'px',
      width: (config.width + 20) + 'px',
      height: (config.height + 20) +'px',
    };

    this.configJumbotromCard = {
      top: (config.top + (config.height) + 40) + 'px',
      left: (config.left + (config.width/2) - 300) +'px',
      width: '434px',
      height: 'auto',
    };
  }

  setServicesSetup() {
    const menuServices = document.getElementById("menu-services");
    const configMenuServices = menuServices.getBoundingClientRect();
    this.configServicesStep = {
      top: (configMenuServices.top - 10) + 'px',
      left: (configMenuServices.left - 10) +'px',
      width: (configMenuServices.width + 20) + 'px',
      height: (configMenuServices.height + 20) +'px',
    };

    this.configServicesCard = {
      top: (configMenuServices.top) + 'px',
      left: (configMenuServices.left + configMenuServices.width + 50) +'px',
      width: '434px',
      height: 'auto',
    };

  }

  setFamilyMenuSetup(){
    const menuFamily = document.getElementById("family-unit-menu");
    const configMenuFamily = menuFamily.getBoundingClientRect();
    this.configFamilyMenuStep = {
      top: (configMenuFamily.top) + 'px',
      left: (configMenuFamily.left) +'px',
      width: (configMenuFamily.width) + 'px',
      height: (configMenuFamily.height) +'px',
    };

    this.configFamilyMenuCard = {
      top: (configMenuFamily.top) + 'px',
      left: (configMenuFamily.left + configMenuFamily.width + 50) +'px',
      width: '434px',
      height: 'auto',
    };

  }

  setHomeMenuSetup() {
    const menuHome = document.getElementById("home-menu");
    const configMenuHome = menuHome.getBoundingClientRect();
    this.configHomeMenuStep = {
      top: (configMenuHome.top) + 'px',
      left: (configMenuHome.left) +'px',
      width: (configMenuHome.width) + 'px',
      height: (configMenuHome.height) +'px',
    };

    this.configHomeMenuCard = {
      top: (configMenuHome.top) + 'px',
      left: (configMenuHome.left + configMenuHome.width + 50) +'px',
      width: '434px',
      height: 'auto',
    };
  }

  initialSetupList(){
    for (const property in this.instructionConfig) {
      if(this.instructionConfig[property]) {
        this.instructionsGuideCards.push(property);
      }
    }
  }

  getPositionFromList(target: string) {
    const find = this.instructionsGuideCards.findIndex(x => x == target);
    return find >= 0 ? find + 1 : 0;
  }

}

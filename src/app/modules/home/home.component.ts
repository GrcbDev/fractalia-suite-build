import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { InstructionGuideMobileComponent } from 'src/app/components/instruction-guide/instruction-guide-mobile/instruction-guide-mobile.component';
import { BackupService } from 'src/app/services/backup.service';
import { BitdefendermspService } from 'src/app/services/bitdefendermsp.service';
import { LocalService } from 'src/app/services/local.service';
import { PartnerService } from 'src/app/services/partner.service';
import { ServicesService } from 'src/app/services/services.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { ServiceCategoryCodes } from '../service/service-one-page/shared/serviceCategoryCodes';
import { SidebarService } from '../shared/sidebar-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filteredServices: any[] = [];
  loading: boolean = true;
  public staticContentUrl = environment.STATIC_CONTENT;
  homeDashboard: any;
  suiteName : string;
  hideGreeting : boolean;
  existDigitalSupport = false;
  existCyberSecurity = false;
  existJumbotron = false;
  public slastPreviousAccessDate: string;
  public wizardSkiped = false;
  instructionGuideSkip = false;
  instructionGuideMobileSkip = false;
  jumbotromFinalizated = false;
  instructionConfig: any;
  isMobile: boolean;
  constructor(
    public serviceService: ServicesService,
    public partnerService: PartnerService,
    public suiteService: SuiteService,
    public userService: UserService,
    public modalService: NgbModal,
    public localService: LocalService,
    private sidebarService: SidebarService,
    public bitdefendermspService: BitdefendermspService,
    public backupService: BackupService,
    private route: Router,
    private CDKmodalService: CDKModalService,
  ) {

  }

  ngOnInit() {
    this.isMobile = window.screen.width <= 767;
    this.loadHomeServices();
    this.slastPreviousAccessDate = this.userService.currentUserValue.lastPreviousAccessDate.toString().indexOf("Z") >= 0 ?
    this.userService.currentUserValue.lastPreviousAccessDate.toString() : this.userService.currentUserValue.lastPreviousAccessDate.toString() + 'Z';
    this.getNameSuiteAndhideGreeting()
  }

  getNameSuiteAndhideGreeting(){
    this.suiteService.suites.map(e => {
      this.suiteName = e.name
      this.hideGreeting = e.hideGreeting
    })
  }

  goToWizard() {
    this.route.navigate(['/auto-activation'])
  }

  setLocalStorage(key, data) {
    this.localService.setJsonValue(key, data);
  }


  cardOpenModal(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

  private loadHomeServices() {
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getUserServicesDashboard(this.userService.selSuiteId, identityToken.partnerId)
      .pipe(
        tap((res: any) => this.homeDashboard = res),
        tap(() => this.showExportSupportCard()),
        tap(() => this.showJumbotrom()),
        tap(() => this.showCybersecurityCard()),
        tap(() => {
          if(!this.existJumbotron) {
            this.showInstructionGuide();
          } else {
            if(this.isMobile) this.tourGuideMobile();
          }
        }),
        tap(() => this.loading = false)
      )
      .subscribe();
  }

  showJumbotrom() {
    this.existJumbotron = !this.homeDashboard || !this.homeDashboard.services || this.homeDashboard.services.length == 0 ? false : true;
    if(!this.existJumbotron) {
      this.jumbotromFinalizated = true;
    }
  }

  showExportSupportCard() {
    if(this.sidebarService && this.sidebarService.userMenuOptions) {
      this.existDigitalSupport = this.sidebarService.userMenuOptions.some(x => x.code === ServiceCategoryCodes.DigitalSupport || x.code === ServiceCategoryCodes.KIT);
    }
  }

  showCybersecurityCard() {
    if (!this.existJumbotron && !this.existDigitalSupport) {
      this.existCyberSecurity = true;
    }
  }

  onJumbotromFinalized() {
    this.jumbotromFinalizated = true;
    if(!this.isMobile) this.tourGuideDesktop();
  }

  showInstructionGuide() {
    if(this.isMobile) {
      this.tourGuideMobile();
    } else {
      this.tourGuideDesktop();
    }
  }

  tourGuideMobile() {
    const alreadySawTheMobileGuideTour = localStorage.getItem('tourGuideMobileOpen') ? true : false;
    this.instructionGuideMobileSkip = localStorage.getItem('dontShowMobileGuidedTourAgain') ? true : false;

    if(!this.instructionGuideMobileSkip && !alreadySawTheMobileGuideTour) {
      localStorage.setItem('tourGuideMobileOpen', 'true');
      const config = {
        modalClass: ['ds-modal-xs', 'ds-pb-0'],
        position: 'center',
        data: {
          userName: this.userService.currentUserValue.name,
          partnerName: this.partnerService.partner.name,
          instructionConfig: {
            startedStep: true,
            hasHomeMenu: this.sidebarService.hasHomeMenu,
            hasFamilyMenu: this.sidebarService.hasFamilyMenu,
            hasServices: this.sidebarService.hasServicesMenu,
            hasJumbotrom: this.existJumbotron,
          }
        }
      };
      this.CDKmodalService.open(InstructionGuideMobileComponent, config);
    }
  }

  tourGuideDesktop() {
    const alreadySawTheWebGuideTour = localStorage.getItem('tourGuideWebOpen') ? true : false;
    this.instructionGuideSkip = localStorage.getItem('dontShowWebGuidedTourAgain') ? true : false;

    if(!alreadySawTheWebGuideTour) {
      localStorage.setItem('tourGuideWebOpen', 'true');
      this.instructionConfig = {
        startedStep: true,
        hasHomeMenu: this.sidebarService.hasHomeMenu,
        hasFamilyMenu: this.sidebarService.hasFamilyMenu,
        hasServices: this.sidebarService.hasServicesMenu,
        hasJumbotrom: this.existJumbotron && this.jumbotromFinalizated,
      }
    }

  }


}

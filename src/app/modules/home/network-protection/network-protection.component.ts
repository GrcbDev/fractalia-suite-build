import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { filter, tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { FractelService } from 'src/app/modules/home/network-protection/shared/fractel.service';
import { UserService } from 'src/app/services/user.service';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { CfrInProgressComponent } from './cfr-in-progress/cfr-in-progress.component';
import { CfrNotStartedComponent } from './cfr-not-started/cfr-not-started.component';
import { CfrResultsComponent } from './cfr-results/cfr-results.component';
import { CFRSteps } from './shared/cfr-steps.enum';

@Component({
  selector: 'app-network-protection',
  templateUrl: './network-protection.component.html',
  styleUrls: ['./network-protection.component.scss']
})
export class NetworkProtectionComponent implements OnInit {
  @Input() data: any;
  isloading = true;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;

  constructor(
    public fractelService: FractelService,
    private userService: UserService,
    private translate: TranslateService,

    private sidebarService: SidebarService,


    public modalService: NgbModal,

    private dynamicRenderComponentService: DynamicRenderComponentService
  ){ }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.loadNetworkProtectionData();
      this.watchReloadCFRInformation()
    }
  }

  watchReloadCFRInformation() {
    this.fractelService.reload$
    .pipe(
      filter(data => !!data),
      tap(() => this.loadNetworkProtectionData()),
    )
    .subscribe();
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() =>{this.loadNetworkProtectionData();
          this.watchReloadCFRInformation()
        } ),

      )
      .subscribe();
  }

  loadNetworkProtectionData() {
      this.fractelService.getFractelData(this.userService.currentUserValue.id)
      .then(() => {
      this.loadComponentByBussinesStrategy()
      this.isloading = false})



  }

  loadComponentByBussinesStrategy() {
    if (!this.fractelService.hasData && !this.fractelService.active$.value && this.userService.currentUserValue.licenseFractel == null) {
      this.renderCFRNotStarted();
      return;
    }
    const step = (this.userService.currentUserValue.licenseFractel !== null  && this.fractelService.hasData && !this.fractelService.active$.value )? CFRSteps.ACUResults :CFRSteps.ACUInProgress;
      switch (step) {
      case CFRSteps.ACUInProgress:
        this.renderCFRInProgress(step);
        break;
      case CFRSteps.ACUResults:
        this.renderCFRResults(step)
        break;

  }
}
  renderCFRNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CfrNotStartedComponent, this.data);
  }

  renderCFRInProgress(stepInformation){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CfrInProgressComponent, this.data);
  }

  renderCFRResults(stepInformation: any) {
    const data = {
      service: this.data,
      stepInformation : {
        nextStep: stepInformation.nextStep,
        data: stepInformation.stepInformation
      }
    }
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CfrResultsComponent, data);
  }


  getLastFractel(lastFractel) {
    var today = new Date();
    var last = new Date(lastFractel);
    // To calculate the time difference of two dates
    var Difference_In_Time = today.getTime() - last.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    if (Difference_In_Days > 0)
      // return "Han pasado "+Difference_In_Days+" días";
      return this.translate.instant('CYBERSECURITY.FRACTEL.ITS_BEEN') + " " + Difference_In_Days + " " + this.translate.instant('CYBERSECURITY.FRACTEL.DAYS');
    else
      return this.translate.instant('CYBERSECURITY.FRACTEL.TODAY');
  }


  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

}

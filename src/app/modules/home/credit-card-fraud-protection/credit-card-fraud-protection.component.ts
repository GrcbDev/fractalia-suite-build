import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap, filter, map } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { MonitoredCardsService } from 'src/app/services/monitored-cards.service';
import { UserService } from 'src/app/services/user.service';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { CitNotStartedComponent } from './cit-not-started/cit-not-started.component';
import { CitResultsComponent } from './cit-results/cit-results.component';
import { CreditCardProtectionSteps } from './shared/credit-card-protection-steps.enum';

@Component({
  selector: 'app-credit-card-fraud-protection',
  templateUrl: './credit-card-fraud-protection.component.html',
  styleUrls: ['./credit-card-fraud-protection.component.scss']
})
export class CreditCardFraudProtectionComponent implements OnInit {
  @Input() data: any;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;

  isloading: boolean = true;
  citInformation: any = {};
  constructor(
    private dynamicRenderComponentService: DynamicRenderComponentService,
    private modalService: NgbModal,
    private sidebarService: SidebarService,
    private userService: UserService,
    public monitoredCardsService: MonitoredCardsService,
  ) { }


  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
     } else{
      this.loadCreditCardProtectionInformation();
      this.watchReloadCreditCardInformation();
     }
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() => {
          this.loadCreditCardProtectionInformation();
          this.watchReloadCreditCardInformation();
        }),
      )
      .subscribe();
  }

  loadComponentByBussinesStrategy() {
    const step = Object.keys(this.citInformation).length > 0 ? CreditCardProtectionSteps.CIPResults : CreditCardProtectionSteps.CIPNotStarted;
    if (!step) {
      this.renderCreditCardNotStarted();
      return;
    }
    switch (step) {
      case CreditCardProtectionSteps.CIPNotStarted:
        this.renderCreditCardNotStarted();
        break;
      case CreditCardProtectionSteps.CIPResults:
        this.renderCreditCardWithResults()
        break;
    }
  }

  watchReloadCreditCardInformation() {
    this.monitoredCardsService.reload$
    .pipe(
      filter(data => !!data),
      tap(() => this.loadCreditCardProtectionInformation(true)),
    )
    .subscribe();
  }

  renderCreditCardNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CitNotStartedComponent, {service: this.data });
  }

  renderCreditCardWithResults() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CitResultsComponent, { citInformation:  this.citInformation, service: this.data } );
  }

  loadCreditCardProtectionInformation(reload?: boolean) {
    if(reload || !Object.keys(this.monitoredCardsService.citInformation).length) {
      this.monitoredCardsService.getMonitoredCardsByUser2()
      .pipe(
        // map((data: any) => this.monitoredCardsService.formatCITInformation(data)),
        // tap((formatData) => this.monitoredIdentitiesService.setITPInformation(formatData)),
        tap((formatData) => this.citInformation = formatData),
        tap(() => this.emitChangesForJumbotrom(reload)),
        tap(() => this.loadComponentByBussinesStrategy()),
        tap(()=> this.isloading = false)
      ).subscribe();
    } else {
      // this.citInformation = this.monitoredIdentitiesService.getITPInformation();
      // this.loadComponentByBussinesStrategy()
      this.isloading = false;
    }
  }

  emitChangesForJumbotrom(reload?: boolean) {
    if(reload) {
      this.sidebarService.emitReloadJumbotrom(
        {
          serviceCode: this.data.code,
          isActive: this.citInformation && this.citInformation.items && this.citInformation.items.length > 0 ? true : false
        }
      );
    }
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

}

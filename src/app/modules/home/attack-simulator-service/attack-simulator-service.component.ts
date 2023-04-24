import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { filter, tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { InfoModalComponent } from 'src/app/components/infomodal/infomodal.component';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { MessageService } from 'src/app/services/message.service';
import { TruncateService } from 'src/app/services/truncate.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { AtsNotStartedComponent } from './ats-not-started/ats-not-started.component';
import { AtsResultsComponent } from './ats-results/ats-results.component';
import { AttackSimulatorServiceSteps } from './shared/ats-enum';
import { AttacksimulatorService } from './shared/attacksimulator.service';

@Component({
  selector: 'app-attack-simulator-service',
  templateUrl: './attack-simulator-service.component.html',
  styleUrls: ['./attack-simulator-service.component.scss']
})
export class AttackSimulatorServiceComponent implements OnInit {
  @Input() data: any;
  public staticContentUrl = environment.STATIC_CONTENT;
  isloading = true;
  loading = false;
  modalRef: NgbModalRef;
  public showMessage: boolean = false;
  public errorMessage: string = "";
  public attacksimulatorStats;
  public send!: number;
  public success!: number;
  public affected!: number
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;

  constructor(
    public attacksimulatorService: AttacksimulatorService,
    public userService: UserService,
    public truncateService: TruncateService,
    public messageService: MessageService,
    public translate: TranslateService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
    private dynamicRenderComponentService: DynamicRenderComponentService,
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else{
      this.loadAttackSimulatorData();
      this.watchReloadATSInformation();
    }
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() =>{ this.loadAttackSimulatorData(true);
          this.watchReloadATSInformation();

        } ),
      )
      .subscribe();
  }
  watchReloadATSInformation() {
    this.attacksimulatorService.reload$
    .pipe(
      filter(data => !!data),
      tap(() => this.loadAttackSimulatorData(true)),
    )
    .subscribe();
  }


  createUser() {
    this.loading = true;
    this.attacksimulatorService.CreateAttackSimulatorEndUser().then(
      result => {
        if(result)
        {
          this.messageService.add(this.translate.instant('MESSAGE_CREATE_OK'), "ok");
          this.loadAttackSimulatorData(true);
        }
        else
          this.messageService.add(this.translate.instant('ACTIVATE_SERVICE_ERROR'), "error");
        this.loading = false;
      }
    );
  }


  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }


  emitChangesForJumbotrom(reload?: boolean) {
    if(reload) {
      this.sidebarService.emitReloadJumbotrom(
        {
          serviceCode: this.data.code,
          isActive: this.attacksimulatorService.status === 1 ? true : false
        }
      );
    }
  }

  loadComponentByBussinesStrategy() {
    const step = this.attacksimulatorService.status === 0 ? AttackSimulatorServiceSteps.ATSNotStarted : AttackSimulatorServiceSteps.ATSResults;
    if (!step) {
      this.renderATSNotStarted();
      return;
    }
    switch (step) {
      case AttackSimulatorServiceSteps.ATSNotStarted:
        this.renderATSNotStarted();
        break;
      case AttackSimulatorServiceSteps.ATSResults:
        this.renderATSResults()
        break;
    }
  }

  renderATSNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, AtsNotStartedComponent, this.data);
  }

  renderATSResults() {
    const data ={
      send: this.send,
      success: this.success,
      affected : this.affected,
      attacksimulatorStats:this.attacksimulatorStats
    }
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, AtsResultsComponent, data);
  }
  loadAttackSimulatorData(reload = false) {
    if(reload || !this.attacksimulatorStats ) {
      this.attacksimulatorService.GetAttackSimulatorStats().then(
        () => {
          this.attacksimulatorStats  = this.attacksimulatorService.stats;
          this.send = Math.ceil((this.attacksimulatorStats.opened * 100) / (this.attacksimulatorStats.received));
          isNaN(this.send) ? this.send = 0 : this.send
          this.success = Math.ceil((this.attacksimulatorStats.clicked * 100) / (this.attacksimulatorStats.received));
          isNaN(this.success) ? this.success = 0 : this.success
          this.affected = Math.ceil((this.attacksimulatorStats.affected * 100) / (this.attacksimulatorStats.received));
          isNaN(this.affected) ? this.affected = 0 : this.affected
          this.emitChangesForJumbotrom(reload);
          this.loadComponentByBussinesStrategy()
          this.isloading = false;
        }
      );
    } else {
      this.attacksimulatorStats  = this.attacksimulatorService.stats;
      this.isloading = false;
    }
  }

}

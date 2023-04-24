import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { LocalService } from 'src/app/services/local.service';
import { PentestingService } from 'src/app/services/pentesting.service';
import { TruncateService } from 'src/app/services/truncate.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-acuetix-service',
  templateUrl: './acuetix-service.component.html',
  styleUrls: ['./acuetix-service.component.scss']
})
export class AcuetixServiceComponent implements OnInit {
  @Input() data: any;
  public staticContentUrl = environment.STATIC_CONTENT;
  isloading = true;
  constructor(
    public pentestingService: PentestingService,
    public userService: UserService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
    public truncateService: TruncateService,
    public localService: LocalService,
    private route: Router,
  ) { }

  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.loadPentestingInfo();
    }
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() => this.loadPentestingInfo()),
      )
      .subscribe();
  }

  loadPentestingInfo() {
    if(this.pentestingService.externalAppAcunetixList && this.pentestingService.externalAppAcunetixList.length) {
      this.isloading = false;
    } else {
      this.pentestingService.getPentesting(this.userService.selSuiteId)
        .then(() => this.pentestingService.loadPentestingDataView())
        .then(() => this.isloading = false)
    }
  }

  loadService(service: any, chatRequest: boolean, param : string = null){
    localStorage.setItem('partnerSuiteId', this.userService.selSuiteId.toString());
    this.pentestingService.serviceId = service.id;
    this.pentestingService.serviceName = service.name;
    this.pentestingService.serviceIcon = service.icon;
    this.pentestingService.serviceDesc = this.truncateService.removeHTML(service.desc);
    this.pentestingService.longDesc = service.longDesc;
    this.localService.setJsonValue('currentService', service);
    if (param)
      this.route.navigate(["service/"+ service.code +"/pentesting/" + param]);
    else
      this.route.navigate(["service/"+ service.code +"/pentesting" ]);
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }
}

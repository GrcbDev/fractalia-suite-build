import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { BackupService } from 'src/app/services/backup.service';
import { LocalService } from 'src/app/services/local.service';
import { UserService } from 'src/app/services/user.service';
import { StringUtils } from 'src/app/utils/string-utils';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-backup-service',
  templateUrl: './backup-service.component.html',
  styleUrls: ['./backup-service.component.scss']
})
export class BackupServiceComponent implements OnInit {
  @Input() data: any;
  isloading = true;
  constructor(
    public userService: UserService,
    public backupService: BackupService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
    private route: Router,
    public localService: LocalService,
  ) { }

  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.isloading = false;
    }
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => {
          this.data = res;
          this.data.html = StringUtils.truncateHTML(this.data.desc, 250);
        }),
        tap(() => this.isloading = false)
      )
      .subscribe();
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

  loadService(service, chatRequest: boolean, param: string = null) {
    this.backupService.serviceId = service.id;
    this.backupService.serviceName = service.name;
    this.backupService.serviceIcon = service.icon;
    this.backupService.serviceDesc = StringUtils.removeHTML(service.desc);
    this.backupService.longDesc = service.longDesc;
    this.backupService.chatRequest = chatRequest;
    this.localService.setJsonValue('currentService', service);
    this.route.navigate(["service/"+ service.code +"/backup"]);
  }
}

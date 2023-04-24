import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { InternetComponent } from 'src/app/components/custom/internet/internet.component';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { UserService } from 'src/app/services/user.service';
import { StringUtils } from 'src/app/utils/string-utils';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-internet-report-service',
  templateUrl: './internet-report-service.component.html',
  styleUrls: ['./internet-report-service.component.scss']
})
export class InternetReportServiceComponent implements OnInit {

  @Input() data: any;
  isloading = true;
  constructor(
    public userService: UserService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
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

  openService() {
    const modalRef = this.modalService.open(InternetComponent);
    modalRef.componentInstance.service = this.data;
  }
}

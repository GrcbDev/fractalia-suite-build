import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { DigitalLifeComponent } from 'src/app/components/custom/digital-life/digital-life.component';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { UserService } from 'src/app/services/user.service';
import { StringUtils } from 'src/app/utils/string-utils';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-digital-life-service',
  templateUrl: './digital-life-service.component.html',
  styleUrls: ['./digital-life-service.component.scss']
})
export class DigitalLifeServiceComponent implements OnInit {

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

  loadService() {
    const modalRef = this.modalService.open(DigitalLifeComponent);
    modalRef.componentInstance.service = this.data;
  }


}

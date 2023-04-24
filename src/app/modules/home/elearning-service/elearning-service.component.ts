import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { InfoModalComponent } from 'src/app/components/infomodal/infomodal.component';
import { ElearningService } from 'src/app/services/elearning.service';
import { UserService } from 'src/app/services/user.service';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-elearning-service',
  templateUrl: './elearning-service.component.html',
  styleUrls: ['./elearning-service.component.scss']
})
export class ElearningServiceComponent implements OnInit {
  @Input() data: any;
  public loadingElearning = false;
  isloading = true;
  constructor(
    public userService: UserService,
    public modalService: NgbModal,
    private translate: TranslateService,
    public elearningService: ElearningService,
    private sidebarService: SidebarService,
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
        tap(res => this.data = res),
        tap(() => this.isloading = false)
      )
      .subscribe();
  }


  openSSOElearning(){
    if(this.userService.currentUserValue.email != null)
    {
      this.loadingElearning = true;
      this.elearningService.OpenSso(this.data).then(
        result => {
          this.loadingElearning = false;
        }
      );
    }
    else
    {
      const modalRef = this.modalService.open(InfoModalComponent);
      modalRef.componentInstance.message = this.translate.instant('EMAIL_REQUIRED');
    }
  }


  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

}

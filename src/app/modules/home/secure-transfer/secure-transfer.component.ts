import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { InfoModalComponent } from 'src/app/components/infomodal/infomodal.component';
import { MessageService } from 'src/app/services/message.service';
import { TranxferService } from 'src/app/services/tranxfer.service';
import { TruncateService } from 'src/app/services/truncate.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-secure-transfer',
  templateUrl: './secure-transfer.component.html',
  styleUrls: ['./secure-transfer.component.scss']
})
export class SecureTransferComponent implements OnInit {
  @Input() data: any;
  public staticContentUrl = environment.STATIC_CONTENT;
  isloading = true;
  modalRef: NgbModalRef;
  public loadingTranxfer = false;
  public tranxferUrl: any;
  public tranxferstate = 0; //0 sin activar. 1. activado


  constructor(
    public userService: UserService,
    public truncateService: TruncateService,
    public modalService: NgbModal,
    public tranxferService: TranxferService,
    public messageService: MessageService,
    private translate: TranslateService,
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.loadSecureTrasnferData();
    }
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
        tap(() => this.loadSecureTrasnferData())
      )
      .subscribe();
  }

  loadSecureTrasnferData() {
    if(this.tranxferUrl) {
      this.isloading = false;
    } else {
      this.tranxferService.GetUserStatusTranxfer(this.userService.currentUserValue.id)
      .then(
        result => {
          //this.loading = false;
          if (result != "") {
            this.tranxferstate = 1;
            this.tranxferUrl = result;
            // console.log(this.tranxferUrl)
          } else {
            this.tranxferstate = 0;
          }

        }
      )
      .then(() => this.isloading = false)
    }
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

  goToTranxfer() {
    window.open(this.tranxferUrl, "_blank");
  }

  async activateTranxferUser() {
    if(this.userService.currentUserValue.email != null)
    {
    this.loadingTranxfer = true;
    // this.translate.get('TRANXFER.REQUEST_SERVICE').subscribe(res => this.messageService.add(res, "ok"));
    await this.tranxferService.ActivateUserTranxfer(
      this.userService.currentUserValue.id,
      this.userService.currentUserValue.name,
      this.userService.currentUserValue.surname,
      this.userService.currentUserValue.email,
      this.userService.currentUserValue.languageCode
    ).then(
      result => {
        this.loadingTranxfer = false;
        if (result != "") {
          this.translate.get('ACTIVATE_SERVICE_OK').subscribe(res => this.messageService.add(res, "ok"));
          this.tranxferstate = 1;
          this.tranxferUrl = result;
        } else {
          this.translate.get('ACTIVATE_SERVICE_ERROR').subscribe(res => { this.messageService.add(res, "error") });
          this.tranxferstate = 0;
        }
      }
      );
    }
    else
    {
      const modalRef = this.modalService.open(InfoModalComponent);
      modalRef.componentInstance.message = this.translate.instant('EMAIL_REQUIRED');
    }
  }
}

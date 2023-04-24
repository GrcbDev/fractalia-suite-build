import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { Office365Service } from 'src/app/services/office365.service';
import { UserService } from 'src/app/services/user.service';
import { StringUtils } from 'src/app/utils/string-utils';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-office-activation-service',
  templateUrl: './office-activation-service.component.html',
  styleUrls: ['./office-activation-service.component.scss']
})
export class OfficeActivationServiceComponent implements OnInit {
  @Input() data: any;
  isloading = true;
  modalRef: any;
  constructor(
    public userService: UserService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
    public office365Service: Office365Service,
    private translate: TranslateService,
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
    let license = false
    this.office365Service.GetUserOffice365Licence().then(
      result => {
        license = this.office365Service.activated
        if(license == false){
          var tempButtons = [
            {

              name: this.translate.instant('OFFICE365.ACTIVAR_BTN1'),
              action : "submit",
              type: "btn btn-primary"
            },
            {
              name: this.translate.instant('OFFICE365.ACTIVAR_BTN2'),
              action: "",
              type: "btn btn-outline-modal"
            }
          ];
          var tempInputs = [
            {
              name: "subscription",
              type: "select",
              label: "OFFICE365.ACTIVAR_LABEL1",
              options: [
                {
                  des: "OFFICE365.ACTIVAR_OPTION1",
                  value: "true"
                },
                {
                  des: "OFFICE365.ACTIVAR_OPTION2",
                  value: "false"
                }
              ]
            }
          ];

          const text1 = this.translate.instant('OFFICE365.ACTIVAR_TEXT1');
          const text2 = this.translate.instant('OFFICE365.ACTIVAR_TEXT2');
          const text3 = this.translate.instant('OFFICE365.ACTIVAR_TEXT3');
          const tempDes = `<div class=\"row mr-0 ml-0\"><div class=\"col-md-12 col-sm-12 prod-col\"><p class=\"prod-text\">${text1}</p></div></div>`;
          const tempSubDes = `<div class=\"row mr-0 ml-0\"><div class=\"col-md-12 col-sm-12 prod-col\"><div class=\"mt-3\"><ul><li class=\"prod-text\">${text2}</li><li class=\"prod-text\">${text3}</li></ul></div></div></div>`
          const tempIcon = "myicons-office365"
          const tempTittle = this.translate.instant('OFFICE365.ACTIVAR_TITULO');
          this.modalRef = this.modalService.open(ModalComponent);
          this.modalRef.componentInstance.name = tempTittle;
          this.modalRef.componentInstance.desc = tempDes;
          this.modalRef.componentInstance.subDesc = tempSubDes;
          this.modalRef.componentInstance.icon = tempIcon;
          this.modalRef.componentInstance.formInputs = tempInputs;
          this.modalRef.componentInstance.buttons = tempButtons;
          this.modalRef.componentInstance.submitted.subscribe( async (res) => await this.subscribeOffice(res));
        }else{
          window.open('https://login.microsoftonline.com/')
        }
    });

  }

  async subscribeOffice(option){
    await this.office365Service.SetUserOffice365Licence(option.subscription.value).then(
      result => {
        var activate = result
        this.modalRef.close()
        if (activate != ""){
          const checkImg = `${environment.STATIC_CONTENT}img/success.png`
          const text4 = this.translate.instant('OFFICE365.ACTIVAR_TEXT4');
          const tempIcon = "myicons-office365"
          const tempTittle = this.translate.instant('OFFICE365.ACTIVAR_TITULO');
          const button = [
            {
              name: this.translate.instant('OFFICE365.ACTIVAR_BTN3'),
              action: "",
              type: "btn btn-primary"
            }
          ];
          const desc = `<div class=\"row mr-0 ml-0\"><div class=\"col-md-12 col-sm-12 prod-col\"><img class=\"modal-img\" src=\"${checkImg}\"><p class=\"prod-text centered mt-5\">${text4}</p></div></div>`
          this.modalRef = this.modalService.open(ModalComponent);
          this.modalRef.componentInstance.icon = tempIcon;
          this.modalRef.componentInstance.name = tempTittle;
          this.modalRef.componentInstance.desc = desc;
          this.modalRef.componentInstance.buttons = button;
        }
    });
  }


}

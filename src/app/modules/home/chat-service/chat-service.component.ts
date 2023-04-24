import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { ChatDataService } from 'src/app/services/chat-data.service';
import { ChatService } from 'src/app/services/chat.service';
import { LocalService } from 'src/app/services/local.service';
import { PartnerService } from 'src/app/services/partner.service';
import { UserService } from 'src/app/services/user.service';
import { StringUtils } from 'src/app/utils/string-utils';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-chat-service',
  templateUrl: './chat-service.component.html',
  styleUrls: ['./chat-service.component.scss']
})
export class ChatServiceComponent implements OnInit {
  @Input() data: any;
  @Input() isCardInHome = false;
  showAlertToAllowPopup = false;
  staticContentUrl: string = environment.STATIC_CONTENT;
  isloading = true;
  public iterations = 0;
  constructor(
    public chatService:  ChatService,
    public chatDataService: ChatDataService,
    public partnerService: PartnerService,
    public userService: UserService,
    public modalService: NgbModal,
    public localService: LocalService,
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadChatInfo();
    } else {
      this.isloading = false;
    }
    this.handleHideAlert();
  }

  onClosePopupAlert(){
    localStorage.setItem('hideAlertToAllowPopups', 'true');
    this.handleHideAlert();
  }

  handleHideAlert() {
    const exits = localStorage.getItem('hideAlertToAllowPopups');
    this.showAlertToAllowPopup = exits ? false : true;
  }

  openChat() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=450,height=450,left=100,top=100`;
    if(this.data.link){
      window.open(this.data.link, 'test', params);
    }
  }

  private loadChatInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getChatInfo(this.data.id, this.userService.selSuiteId, identityToken.partnerId)
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

}

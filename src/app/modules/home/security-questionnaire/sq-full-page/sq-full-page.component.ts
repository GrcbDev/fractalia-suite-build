import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { LocalService } from 'src/app/services/local.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sq-full-page',
  templateUrl: './sq-full-page.component.html',
  styleUrls: ['./sq-full-page.component.scss']
})
export class SqFullPageComponent implements OnInit {
  @Input() data: any;
  constructor(
    public userService: UserService,
    public modalService: NgbModal,
    public localService: LocalService,
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    this.loadChatInfo();
  }

  private loadChatInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getChatInfo(this.data.id, this.userService.selSuiteId, identityToken.partnerId)
      .pipe(
        tap(res => {
          this.data = res;
        }),
      )
      .subscribe();
  }

  openServiceInfo() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = this.data.name;
    modalRef.componentInstance.desc = this.data.longDesc;
    modalRef.componentInstance.icon = this.data.icon;
  }
}

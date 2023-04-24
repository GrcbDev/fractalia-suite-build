import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { UserService } from 'src/app/services/user.service';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-secure-browsing',
  templateUrl: './secure-browsing.component.html',
  styleUrls: ['./secure-browsing.component.scss']
})
export class SecureBrowsingComponent implements OnInit {
  @Input() data: any;
  constructor(
    public modalService: NgbModal,
    public userService: UserService,
    private sidebarService: SidebarService,
  ) { }


  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    }
  }

  private loadServiceInfo(){
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap(res => this.data = res),
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

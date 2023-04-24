import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { UserService } from 'src/app/services/user.service';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-informative-service',
  templateUrl: './informative-service.component.html',
  styleUrls: ['./informative-service.component.scss']
})
export class InformativeServiceComponent implements OnInit {
  @Input() data: any;
  @Input() isCardInHome = false;
  isloading = true;
  finalContent: any;
  constructor(
    public userService: UserService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
  ) { }

  ngOnInit() {
    if(!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.renderFinalContent();
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
          this.renderFinalContent();
        }),
        tap(() => this.isloading = false)
      )
      .subscribe();
  }

  renderFinalContent() {
    this.finalContent = this.data.content ? this.data.content : this.data.longDesc;
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }


}

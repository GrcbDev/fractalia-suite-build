import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';

@Component({
  selector: 'app-cpr-service',
  templateUrl: './cpr-service.component.html',
  styleUrls: ['./cpr-service.component.scss']
})
export class CprServiceComponent implements OnInit {
  @Input() data: any;

  public staticContentUrl = environment.STATIC_CONTENT;
  isloading = true;
  constructor(
    private sidebarService: SidebarService,
    public userService: UserService,
    public modalService: NgbModal,
    private router: Router,
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

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

  loadService() {
    this.router.navigate(["service/"+this.data.code+"/protection"]);
  }

}

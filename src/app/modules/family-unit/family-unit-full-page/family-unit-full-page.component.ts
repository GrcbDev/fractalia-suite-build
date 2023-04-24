import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { LocalService } from 'src/app/services/local.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-family-unit-full-page',
  templateUrl: './family-unit-full-page.component.html',
  styleUrls: ['./family-unit-full-page.component.scss']
})
export class FamilyUnitFullPageComponent implements OnInit {
  @Input() data: any;
  isloading = true;
  constructor(  public userService: UserService,
    public modalService: NgbModal,
    public localService: LocalService,
    private sidebarService: SidebarService,) { }

    ngOnInit() {
      this.loadServiceInfo();
    }
    private loadServiceInfo(){
      const identityToken = this.userService.currentUserValue;
      this.sidebarService
        .getServiceInfo(this.data.id, identityToken.partnerId)
        .pipe(
          tap(res => {
            this.data = res;
            this.isloading = false;
          }),
        )
        .subscribe();
    }
  

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiberalarmaService } from 'src/app/services/ciberalarma.service';
import { LocalService } from 'src/app/services/local.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { InfoModalComponent } from '../../infomodal/infomodal.component';
import { UserService } from 'src/app/services/user.service';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navegacionsegura',
  templateUrl: './navegacionsegura.component.html',
  styleUrls: ['./navegacionsegura.component.scss']
})
export class NavegacionseguraComponent {

  loading = false;
  error = false;
  urlSsoCiberalarma = "";
  modalRef: NgbModalRef;

  serviceCode: string;
  isloading = true;
  service: any;
  public staticContentUrl = environment.STATIC_CONTENT;
  constructor(public ciberalarmaService: CiberalarmaService,
    private router: Router,
    public modalService: NgbModal,
    private localService: LocalService,
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    public translate: TranslateService,
    public userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.serviceCode = val['code'];
      this.loadServiceInfoByCode(this.serviceCode);
    });
  }

  private loadServiceInfoByCode(code: string){
    this.sidebarService
      .getServiceInfoByCode(code)
      .pipe(
        tap(res => this.service = res),
        tap(() => this.isloading = false)
      )
      .subscribe();
  }

  async accessCiberalarma() {
    if(this.userService.currentUserValue.email != null)
    {
      this.loading = true;
      this.ciberalarmaService.AccessCiberalarma().then(result => {
        // console.log(result);
        if(result != null)
          window.open(result.url, "_blank");
        else
          this.error = true;
        this.loading = false;
      });
    }
    else
    {
      const modalRef = this.modalService.open(InfoModalComponent);
      modalRef.componentInstance.message = this.translate.instant('EMAIL_REQUIRED');
    }
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

}

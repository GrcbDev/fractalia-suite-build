import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ExternalDigitalLegacyRequest } from 'src/app/models/externalDigitalLegacyRequest';
import { ExternalappDigitalLegacyService } from 'src/app/services/externalapp-digital-legacy.service';
import { UserService } from 'src/app/services/user.service';
import { LocalService } from 'src/app/services/local.service';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-digital-legacy',
  templateUrl: './digital-legacy.component.html',
  styleUrls: ['./digital-legacy.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class DigitalLegacyComponent implements OnInit {

  loading = false;
  public digitalLegacyReq: ExternalDigitalLegacyRequest = new ExternalDigitalLegacyRequest;
  public isRequested = false;

  serviceCode: string;
  isloading = true;
  service: any;
  constructor(
    public externalAppLegacyService: ExternalappDigitalLegacyService,
    private router: Router,
    public translate: TranslateService,
    public userService: UserService,
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private localService: LocalService) {
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
        tap(() => this.checkIsRequested()),
        tap(() => this.isloading = false)
      )
      .subscribe();
  }

  async onSubmit() {
    this.loading = true;
    if (this.externalAppLegacyService.serviceType === "ELD") this.digitalLegacyReq.digitalLegacy = true;
    else if (this.externalAppLegacyService.serviceType === "EVD") this.digitalLegacyReq.digitalLife = true;
    else if (this.externalAppLegacyService.serviceType === "ETD") this.digitalLegacyReq.digitalTestament = true;
    await this.externalAppLegacyService.postDigitalLegacy(this.digitalLegacyReq);
    this.checkIsRequested();
    this.loading = false;
  }

  public checkIsRequested(){
    if (this.userService.currentUserValue.hasExtDigitalLegacyRequested && this.externalAppLegacyService.serviceType === "ELD") this.isRequested = true;
    if (this.userService.currentUserValue.hasExtDigitalLifeRequested && this.externalAppLegacyService.serviceType === "EVD") this.isRequested = true;
    if (this.userService.currentUserValue.hasExtDigitalTestamentRequested && this.externalAppLegacyService.serviceType === "ETD") this.isRequested = true;
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }
}

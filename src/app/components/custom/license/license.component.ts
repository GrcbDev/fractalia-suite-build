import { Component } from '@angular/core';
import { LicenceService } from 'src/app/services/licence.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TruncateService } from 'src/app/services/truncate.service';
import { PartnerService } from 'src/app/services/partner.service';
import { LocalService } from 'src/app/services/local.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { tap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss'],
})
export class LicenseComponent {
  public staticContentUrl = environment.STATIC_CONTENT;
  public licence: string = "";
  loading = false;
  serviceCode: string;
  isloading = true;
  service: any;

  constructor(public licenseService: LicenceService,
    public userService: UserService,
    public truncateService: TruncateService,
    private partnerService: PartnerService,
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
        tap(async () =>  await this.checkLicence(this.userService.selSuiteId, this.service.id, this.partnerService.partner.languageId)),
        tap(() => this.isloading = false)
      )
      .subscribe();
  }

  async checkLicence(partnerSuiteId: number, serviceId: number, languageId: number) {
    this.loading = !this.loading;

    this.licenseService
    .getUserLicence(partnerSuiteId, serviceId, languageId, 3)
    .pipe(
      tap((res: any) => {
        this.licence = res && res.value ? res.value : '';
        this.loading = !this.loading;
      })
    )
    .subscribe();

    // this.loading = !this.loading;
    // await this.licenseService.getUserLicence(partnerSuiteId, serviceId, languageId, 3);
    // this.licence = this.licenseService.globalLicence;
    // this.loading = !this.loading;
  }

  async setUserLicence() {
    this.loading = !this.loading;
    await this.licenseService.setUserLicence(this.userService.selSuiteId, this.partnerService.partner.languageId.toString(), this.service.id.toString());
    this.loading = !this.loading;
    this.licence = this.licenseService.globalLicence;
    if(this.licence){
      $('#divPopupLicence').show();
    }
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { LicenceService } from 'src/app/services/licence.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TruncateService } from 'src/app/services/truncate.service';
import { PartnerService } from 'src/app/services/partner.service';
import { ServicesService } from 'src/app/services/services.service';
import { ServiceTypeService } from 'src/app/services/service-type.service';
import { LocalService } from 'src/app/services/local.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { tap } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-licenseinternet',
  templateUrl: './licenseinternet.component.html',
  styleUrls: ['./licenseinternet.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LicenseinternetComponent {
  public staticContentUrl = environment.STATIC_CONTENT;
  public licence: string = "";
  public originalCode: string = "";
  loading = false;
  serviceCode: string;
  isloading = true;
  service: any;

  constructor(public licenseService: LicenceService,
    public userService: UserService,
    public truncateService: TruncateService,
    private partnerService: PartnerService,
    public serviceTypeService: ServiceTypeService,
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
    await this.serviceTypeService.loadServiceTypes();
    let serviceTypeId = this.serviceTypeService.types.find(x => x.code == "BIS").id;

    this.licenseService
    .getUserLicence(partnerSuiteId, serviceId, languageId, serviceTypeId)
    .pipe(
      tap((res: any) => {
        this.licence = res && res.value ? res.value : '';
        this.loading = !this.loading;
      })
    )
    .subscribe();
    // await this.licenseService.getUserLicence(partnerSuiteId, serviceId, languageId, serviceTypeId);
    // this.licence = this.licenseService.globalLicence;
    // this.loading = !this.loading;
  }

  async setUserLicenceIS() {
    this.loading = !this.loading;
    await this.licenseService.setUserLicenceIS(this.userService.selSuiteId, this.partnerService.partner.languageId.toString(), this.service.id);
    this.loading = !this.loading;
    this.licence = this.licenseService.globalLicence;
    if (this.licence) {
      $('#divPopupLicence').show();
    }
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }
}


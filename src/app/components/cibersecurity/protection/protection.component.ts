import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenceService } from 'src/app/services/licence.service';
import { PartnerService } from 'src/app/services/partner.service';
import { ProtectionService } from 'src/app/services/protection.service';
import { ServiceTypeService } from 'src/app/services/service-type.service';
import { UserService } from 'src/app/services/user.service';
import { LocalService } from 'src/app/services/local.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { tap } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss'],
})
export class ProtectionComponent implements OnInit {

  public licence: string = "";
  public loading: boolean = false;
  public staticContentUrl = environment.STATIC_CONTENT;



  serviceCode: string;
  isloading = true;
  service: any;
  constructor(
    public protectionService: ProtectionService,
    public licenceService: LicenceService,
    public partnerService: PartnerService,
    public serviceTypeService: ServiceTypeService,
    public userService: UserService,
    public router: Router,
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private localService: LocalService) { }

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
          tap(async () => await this.loadProtectionData()),
          tap(() => this.isloading = false)
        )
        .subscribe();
    }




  // async ngOnInit() {
  //   if (this.protectionService.serviceId) {
  //     if (this.getLocalStorage('currentService') == null) {
  //       this.router.navigate(['/home']);
  //       return;
  //     }
  //     else { // If refresh
  //       let service = this.getLocalStorage('currentService');
  //       this.protectionService.serviceId = service.id;
  //       this.protectionService.serviceName = service.name;
  //       this.protectionService.serviceIcon = service.icon;
  //       this.protectionService.serviceDesc = service.desc;
  //       this.protectionService.longDesc = service.longDesc;
  //       this.userService.selSuiteName = localStorage.getItem('suiteName');
  //       let partnerSuiteId = localStorage.getItem('partnerSuiteId');
  //       this.checkLicence(Number(partnerSuiteId), Number(service.id), this.partnerService.partner.languageId);
  //     }
  //   }
  //   else {
  //     let service = this.getLocalStorage('currentService');
  //     this.protectionService.serviceId = service.id;
  //     this.protectionService.serviceName = service.name;
  //     this.protectionService.serviceIcon = service.icon;
  //     this.protectionService.serviceDesc = service.desc;
  //     this.protectionService.longDesc = service.longDesc;
  //     this.userService.selSuiteName = localStorage.getItem('suiteName');
  //     let partnerSuiteId = localStorage.getItem('partnerSuiteId');
  //     this.checkLicence(Number(partnerSuiteId), Number(service.id), this.partnerService.partner.languageId);
  //   }

  // }

  async loadProtectionData() {
    let partnerSuiteId = this.userService.selSuiteId;
    await this.serviceTypeService.loadServiceTypes();
    let serviceTypeId = this.serviceTypeService.types.find(x => x.code == "CPR").id; //Ciberseguridad - Protection
    this.protectionService.getProtectionStatus(partnerSuiteId, serviceTypeId);
    this.protectionService.getProtectionDeviceData(partnerSuiteId, serviceTypeId);
    this.protectionService.getProtectionDevicesAnalyzed(partnerSuiteId, serviceTypeId);
    this.protectionService.getProtectionDesktopDevices(partnerSuiteId, serviceTypeId);
    this.protectionService.getProtectionMobileDevices(partnerSuiteId, serviceTypeId);
  }


  async checkLicence(partnerSuiteId: number, serviceId: number, languageId: number) {
    await this.serviceTypeService.loadServiceTypes();
    let serviceTypeId = this.serviceTypeService.types.find(x => x.code == "CPR").id; //Ciberseguridad - Protection

    this.licenceService
    .getUserLicence(partnerSuiteId, serviceId, languageId, serviceTypeId)
    .pipe(
      tap((res: any) => {
        this.licence = res && res.value ? res.value : '';
      })
    )
    .subscribe();
    // await this.licenceService.getUserLicence(partnerSuiteId, serviceId, languageId, serviceTypeId);
    // this.licence = this.licenceService.globalLicence;
  }

  async setUserLicence() {
    this.loading = !this.loading;
    let partnerSuiteId = this.userService.selSuiteId;
    await this.licenceService.setUserLicencePR(Number(partnerSuiteId), this.partnerService.partner.languageId.toString(), this.service.id.toString());
    this.loading = !this.loading;
    this.licence = this.licenceService.globalLicence;
    if (this.licence) {
      $('#divPopupLicence').show();
    }
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }
}

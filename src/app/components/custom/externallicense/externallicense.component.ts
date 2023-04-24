import { Component } from '@angular/core';
import { ExternalLicenseService } from 'src/app/services/externallicense.service';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruncateService } from 'src/app/services/truncate.service';
import { LocalService } from 'src/app/services/local.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-externallicense',
  templateUrl: './externallicense.component.html',
  styleUrls: ['./externallicense.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ExternalLicenseComponent {

  public externalLicenseCode: string = "";
  loading = false;
  public staticContentUrl = environment.STATIC_CONTENT;

  serviceCode: string;
  isloading = true;
  service: any;
  constructor(public externalLicenseService: ExternalLicenseService,
    public userService: UserService,
    public truncateService: TruncateService,
    private router: Router,
    public translate: TranslateService,
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
        tap(async () => await this.checkExternalLicense(this.service.code)),
        tap(() => this.isloading = false)
      )
      .subscribe();
  }

  async checkExternalLicense(serviceCode: string)
  {
    await this.externalLicenseService.getUserExternalLicenseData(serviceCode);
    this.externalLicenseCode = this.externalLicenseService.externalLicenseCode === null ? this.translate.instant('ANTIVIRUS.NO_LICENSE') : this.externalLicenseService.externalLicenseCode;
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }
}

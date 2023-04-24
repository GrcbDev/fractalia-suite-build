import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { DownloadService } from 'src/app/services/download.service';
import { PartnerService } from 'src/app/services/partner.service';
import { UserService } from 'src/app/services/user.service';
import { StringUtils } from 'src/app/utils/string-utils';

@Component({
  selector: 'app-agent-service-full-page',
  templateUrl: './agent-service-full-page.component.html',
  styleUrls: ['./agent-service-full-page.component.scss']
})
export class AgentServiceFullPageComponent implements OnInit {
  serviceCode: string;
  service: any;
  isloading = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public userService: UserService,
    private sidebarService: SidebarService,
    public downloadService: DownloadService,
    public partnerService: PartnerService,
  ) { }

  ngOnInit() {
    // if(this.downloadService.serviceId) {
    //   this.loadServiceInfo();
    //   // this.loadDownload();
    // } else{
    //   this.router.navigate(['/home']);
    // }
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
        tap(async () =>  await this.downloadService.getDownload(this.service.id, this.partnerService.partner.languageId)),
        tap(() => this.isloading = false)
      )
      .subscribe();
  }

}

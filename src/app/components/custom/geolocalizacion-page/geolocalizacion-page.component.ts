import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { CiberalarmaService } from 'src/app/services/ciberalarma.service';
import { LocalService } from 'src/app/services/local.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion-page.component.html',
  styleUrls: ['./geolocalizacion-page.component.scss']
})
export class GeolocalizacionPageComponent {

  loading = false;
  error = false;
  urlSsoCiberalarma = "";

  serviceCode: string;
  isloading = true;
  service: any;
  public staticContentUrl = environment.STATIC_CONTENT;
  constructor(public ciberalarmaService: CiberalarmaService,
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
        tap(() => this.isloading = false)
      )
      .subscribe();
  }

  async accessCiberalarma() {
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

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

}

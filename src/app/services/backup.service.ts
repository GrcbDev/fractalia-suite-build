import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { TranslateService } from '@ngx-translate/core';
import { externalAppAcronisData } from '../models/externalAppAcronis';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import * as Chart from 'chart.js';
import { BytesValidator } from '../validators/bytes.validator';

import { LocalService } from 'src/app/services/local.service';
import { WizardStep } from '../models/wizardStep';
import { BehaviorSubject } from 'rxjs';
import { StringUtils } from '../utils/string-utils';

@Injectable({
  providedIn: 'root'
})
export class BackupService {
  public serviceId: number;
  public serviceName: string;
  public serviceIcon: string;
  public serviceDesc: string;
  public longDesc: string;
  public loading: Boolean = false;
  public chatRequest: boolean = false;
  public backupPercent: number = 0;
  public canSkipDownload: boolean = false;
  public clientDownloaded: boolean = false;
  public hasPassword: boolean = false;
  public hasActivated: boolean = false;

  data: externalAppAcronisData = new externalAppAcronisData();
  hasData: boolean = false;
  chartLabels: Label[];
  public chartData = [];

  public doughnutChartData: MultiDataSet = [
    this.chartData
  ];
  chartType: ChartType = 'doughnut';

  public doughnutColors: any[] = [
    { backgroundColor: ["#0053aa", "#7dc0f2"] }];

  public acronisData: WizardStep = new WizardStep();



  reload$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  CACInformation: any = {};
  constructor(private http: HttpClient,
    private translate: TranslateService,
    private localService: LocalService) {

    this.chartLabels = [this.translate.instant('USED'), this.translate.instant('AVAILABLE')];
    Chart.defaults.global.tooltips.enabled = false;
    Chart.defaults.global.animation.duration = 2000;
    Chart.defaults.global.legend.display = false
  }

  public async requestBackupService() {
    return this.http.post<any>(environment.apiEndpoint + "api/acronis", null).toPromise();
  }

  public async getBackupData() {
    return this.http.get<externalAppAcronisData>(environment.apiEndpoint + "api/acronis/data").toPromise().then((result) => {
      if (result && result.active && (Number(result.mobInstalled) > 0 || Number(result.wksInstalled) > 0 || Number(result.spaceUsed) > 0)) {
        this.chartData = []
        this.hasData = true;
        this.data = result;

        let spaceFree = Number.parseInt(this.data.spaceAssigned) - Number.parseInt(this.data.spaceUsed)
        this.chartData.push(this.data.spaceUsed)
        this.chartData.push(spaceFree)

        var bytesSpaceAssigned: number = +this.data.spaceAssigned;
        var bytesSpaceUsed: number = +this.data.spaceUsed;
        if (bytesSpaceUsed > 0) {
          this.backupPercent = ((bytesSpaceUsed * 100) / bytesSpaceAssigned);
        }

        this.data.spaceAssigned = BytesValidator.GetSpaceWithDecimals(this.data.spaceAssigned)
        this.data.spaceUsed = BytesValidator.GetSpaceWithDecimals(this.data.spaceUsed)

        this.loading = false;
      } else {
         if(result)
         {
            this.hasActivated = true;
            this.hasPassword = result.active;
         }
         else
         {
            this.hasActivated = false;
         }
      }

    })
  }

  setLocalStorage(key, data) {
    this.localService.setJsonValue(key, data);
  }


  emitReload(value?: any){
    this.reload$.next(value);
  }

  getBackupDataObservable() {
    return this.http.get<externalAppAcronisData>(environment.apiEndpoint + "api/acronis/data")
  }


  getActivationServicesasObservable() {
    return this.http.get<WizardStep>(environment.apiEndpoint + "api/User/GetWizardAllStatus");
  }

  resendMail() {
    return this.http.post(environment.apiEndpoint + "api/Acronis/send_activation_email", null);
  }

}

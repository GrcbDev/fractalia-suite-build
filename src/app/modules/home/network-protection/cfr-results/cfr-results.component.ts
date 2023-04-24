import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackupService } from 'src/app/services/backup.service';
import { FractelService } from 'src/app/modules/home/network-protection/shared/fractel.service';
import { LocalService } from 'src/app/services/local.service';
import { TruncateService } from 'src/app/services/truncate.service';
import { UserService } from 'src/app/services/user.service';
import { StringUtils } from 'src/app/utils/string-utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cfr-results',
  templateUrl: './cfr-results.component.html',
  styleUrls: ['./cfr-results.component.scss']
})
export class CfrResultsComponent implements OnInit {
  public appEndpoint: string;
  licence
  totalAnalizados
  @Input() showMoreInfo:boolean= true;
  @Input() data: any;
  constructor(
    public userService: UserService,
    public fractelService: FractelService,
    public localService: LocalService,
    public backupService: BackupService,
    public truncateService: TruncateService,
    private route: Router,) { }

  ngOnInit() {
    this.appEndpoint = environment.apiEndpoint + environment.fractelPath + "Fractel.exe";
    this.licence = this.userService.currentUserValue.licenseFractel;




}
ngAfterViewInit() {
  this.totalAnalizados = Number(this.fractelService.totalAnalizados*7)
}

loadService(service, chatRequest: boolean, param: string = null) {
  this.fractelService.serviceId = service.id;
  this.fractelService.serviceName = service.name;
  this.fractelService.serviceIcon = service.icon;
  this.fractelService.serviceDesc = StringUtils.removeHTML(service.desc);
  this.fractelService.longDesc = service.longDesc;
  // this.fractelService.partnerSuiteId = this.userService.selSuiteId.toString();
  this.localService.setJsonValue('currentService', service);

  this.backupService.serviceId = service.id;
  this.backupService.serviceName = service.name;
  this.backupService.serviceIcon = service.icon;
  this.backupService.serviceDesc = this.truncateService.removeHTML(service.desc);
  this.backupService.longDesc = service.longDesc;
  this.backupService.chatRequest = chatRequest;
  if (param) {
    this.route.navigate(["service/"+ this.data.service.code +"/lan-analyzer/" + param]);
  }
  else {
    this.route.navigate(["service/"+ this.data.service.code +"/lan-analyzer"]);
  }
}
copyText(){
  navigator.clipboard.writeText(this.licence);
}
}

import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StringUtils } from 'src/app/utils/string-utils';
import { BytesValidator } from 'src/app/validators/bytes.validator';
import { LoginToAcronisURL } from '../shared/cac-consts';

@Component({
  selector: 'app-cac-results',
  templateUrl: './cac-results.component.html',
  styleUrls: ['./cac-results.component.scss']
})
export class CacResultsComponent implements OnInit {
  @Input() data: any;
  info: any;
  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.proccessInformation(this.data.cacInformation);
  }

  calcPercentFull(spaceUsed: string, spaceAssigned: string) {
    try {
      var usedBytes = 0;
      if (spaceUsed.search(" Bytes") >= 0)
        usedBytes = Number(spaceUsed.replace(" Bytes", ""))
      if (spaceUsed.search(" B") >= 0)
        usedBytes = Number(spaceUsed.replace(" B", ""))
      if (spaceUsed.search(" KB") >= 0)
        usedBytes = Number(spaceUsed.replace(" KB", "")) * 1024;
      if (spaceUsed.search(" MB") >= 0)
        usedBytes = Number(spaceUsed.replace(" MB", "")) * 1048576;
      if (spaceUsed.search(" GB") >= 0)
        usedBytes = Number(spaceUsed.replace(" GB", "")) * 1073741824;

      var assignedBytes = 0;
      if (spaceAssigned.search(" Bytes") >= 0)
        assignedBytes = Number(spaceAssigned.replace(" Bytes", ""))
      if (spaceAssigned.search(" B") >= 0)
        assignedBytes = Number(spaceAssigned.replace(" B", ""))
      if (spaceAssigned.search(" KB") >= 0)
        assignedBytes = Number(spaceAssigned.replace(" KB", "")) * 1024;
      if (spaceAssigned.search(" MB") >= 0)
        assignedBytes = Number(spaceAssigned.replace(" MB", "")) * 1048576;
      if (spaceAssigned.search(" GB") >= 0)
        assignedBytes = Number(spaceAssigned.replace(" GB", "")) * 1073741824;

      var percent = Math.round((usedBytes / assignedBytes) * 100);
      if (percent > 100)
        return 100;
      return percent;
    } catch (error: any) {
      return 0;
    }
  }

  proccessInformation(info: any) {
    this.info = info;
    this.info.spaceAssigned = BytesValidator.GetSpaceWithDecimals(info.spaceAssigned)
    this.info.spaceUsed = BytesValidator.GetSpaceWithDecimals(info.spaceUsed)
    this.info.dateFormatted = StringUtils.convertDateLatinFormat(new Date(info.alcatrazDate))

    this.info.percentFull = this.calcPercentFull(info.spaceUsed, info.spaceAssigned);

    const alcatrazDate = new Date(info.alcatrazDate).getTime();
    const today = new Date().getTime();
    const diff = today - alcatrazDate;
    const diference: number = Math.round(diff / (1000 * 60 * 60 * 24));
    if (diference < 0) {
      this.info.dayDifference = '';
    }

    if (diference === 0) {
      this.info.dayDifference = this.translate.instant('NOTIFICATIONS.TODAY');
    }

    if (diference > 0) {
      this.info.dayDifference = this.translate.instant('CYBERSECURITY.BACKUP.AGO') + ' ' + diference + ' ' + this.translate.instant('CYBERSECURITY.BACKUP.DAYS');
    }
  }

  goToAcronis() {
    window.open(LoginToAcronisURL, '_blank');
  }

}

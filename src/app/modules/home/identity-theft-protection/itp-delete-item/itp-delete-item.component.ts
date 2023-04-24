import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { FamilyUnitService } from 'src/app/modules/poc/shared/family-unit.service';
import { MessageService } from 'src/app/services/message.service';
import { MonitoredIdentitiesService } from 'src/app/services/monitored-identities.service';

@Component({
  selector: 'app-itp-delete-item',
  templateUrl: './itp-delete-item.component.html',
  styleUrls: ['./itp-delete-item.component.scss']
})
export class ItpDeleteItemComponent implements OnInit {
  loading = false;
  emailSelected: any = {};
  constructor(
    private modalRef: CDKModalRef,
    private translate: TranslateService,
    private messageService: MessageService,
    private monitoredIdentitiesService: MonitoredIdentitiesService,
    private familyUnitService: FamilyUnitService,
  ) { }

  ngOnInit() {
    this.emailSelected = this.modalRef.config.data;
  }

  closeModal(deleteEmail?: boolean) {
    this.modalRef.close(deleteEmail);
  }

  saveDeleteEmail() {
    this.loading = true;
    this.translate.get('REQUEST_DELETE_SERVICE').subscribe(res => this.messageService.add(res, "ok"));
    this.monitoredIdentitiesService.deleteMonitoredIdentity(this.emailSelected.identityId).then(
      result => {
        this.loading = false;
        if (result) {
          this.messageService.add(this.translate.instant('CYBERALARM.IDENTITIES.REMOVE_FORM.RESULT_OK'), "ok");
          this.monitoredIdentitiesService.emitReload(true);
          this.familyUnitService.emitDeleteIdentity(true)
          this.closeModal(true);
        }
        else{
          this.messageService.add(this.translate.instant('CYBERALARM.IDENTITIES.REMOVE_FORM.RESULT_ERROR'), "error");
        }
      })
  }
}

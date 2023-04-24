import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BackupService } from 'src/app/services/backup.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cac-not-started',
  templateUrl: './cac-not-started.component.html',
  styleUrls: ['./cac-not-started.component.scss']
})
export class CacNotStartedComponent implements OnInit {
  @Input() data: any;
  service: any;
  loading: boolean = false;
  constructor(
    private backupService: BackupService,
    private messageService: MessageService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.service = this.data.service;
  }

  initProcess() {
    this.loading = true;
    this.messageService.add(this.translate.instant('BACKUP.TEXT2'), "info");
    this.backupService.requestBackupService()
    .then(() => {
      this.backupService.emitReload(true);
      this.messageService.add(this.translate.instant('ACTIVATE_SERVICE_OK'), "ok");
    })
    .catch(() => {
      this.messageService.add(this.translate.instant('ACTIVATE_SERVICE_ERROR'), "error");
      this.loading = false
    });
  }

}

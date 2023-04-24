import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BackupService } from 'src/app/services/backup.service';
import { FractelService } from 'src/app/modules/home/network-protection/shared/fractel.service';
import { LocalService } from 'src/app/services/local.service';
import { UserService } from 'src/app/services/user.service';
import { TruncateService } from 'src/app/services/truncate.service';

@Component({
  selector: 'app-cfr-not-started',
  templateUrl: './cfr-not-started.component.html',
  styleUrls: ['./cfr-not-started.component.scss']
})
export class CfrNotStartedComponent implements OnInit {
  @Input() data: any;
  loading = true;
  constructor(
    public translate: TranslateService,
    public fractelService: FractelService,
    public userService: UserService,
    public localService: LocalService,
    public backupService: BackupService,
    public truncateService: TruncateService,

    ) { }

  ngOnInit() {

  }
  loadService(){
    this.loading = false
    this.fractelService.emitReload(true);
    this.fractelService.emitActive(true);
  }

}

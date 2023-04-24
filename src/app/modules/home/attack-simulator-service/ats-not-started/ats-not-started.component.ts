import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

import { InfoModalComponent } from 'src/app/components/infomodal/infomodal.component';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttacksimulatorService } from '../shared/attacksimulator.service';

@Component({
  selector: 'app-ats-not-started',
  templateUrl: './ats-not-started.component.html',
  styleUrls: ['./ats-not-started.component.scss']
})
export class AtsNotStartedComponent implements OnInit {
  @Input() data: any;
  loading = false;
  constructor(
    public userService: UserService,
    public messageService: MessageService,
    public attacksimulatorService: AttacksimulatorService,
    public translate: TranslateService,
    public modalService: NgbModal,) { }

  ngOnInit() {

  }

  createFamily() {
    if(this.userService.currentUserValue.email != null)
    {
      this.loading = true;
      this.attacksimulatorService.CreateAttackSimulatorFamily().then(
        result => {
          if(result.status == 200)
          {
            this.messageService.add(this.translate.instant('COMP_ATTACKSIMULATOR.MESSAGE_CREATE_OK'), "ok");
            this.attacksimulatorService.emitReload(true);
          }
          else
            this.messageService.add(result.message, "error");
            this.loading = false;
        }
      );
    }
    else
    {
      const modalRef = this.modalService.open(InfoModalComponent);
      modalRef.componentInstance.message = this.translate.instant('EMAIL_REQUIRED');
    }
  }
  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }


}







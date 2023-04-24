import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cfr-delete-device',
  templateUrl: './cfr-delete-device.component.html',
  styleUrls: ['./cfr-delete-device.component.scss']
})
export class CfrDeleteDeviceComponent implements OnInit {
  loading = false;
  constructor( public modalRef: CDKModalRef,
    public translate: TranslateService,
    private messageService: MessageService,) { }

  ngOnInit() {

  }
  closeModal(deleteEmail?: boolean) {
    this.modalRef.close(deleteEmail);
  }

  deletedDevice() {

  }

}

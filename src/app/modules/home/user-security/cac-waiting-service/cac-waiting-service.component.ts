import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';

@Component({
  selector: 'app-cac-waiting-service',
  templateUrl: './cac-waiting-service.component.html',
  styleUrls: ['./cac-waiting-service.component.scss']
})
export class CacWaitingServiceComponent implements OnInit {

  constructor(
    private modalRef: CDKModalRef,
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.close();
  }


}

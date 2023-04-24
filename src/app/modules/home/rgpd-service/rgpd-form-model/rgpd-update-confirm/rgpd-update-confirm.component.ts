import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';

@Component({
  selector: 'app-rgpd-update-confirm',
  templateUrl: './rgpd-update-confirm.component.html',
  styleUrls: ['./rgpd-update-confirm.component.scss']
})
export class RgpdUpdateConfirmComponent implements OnInit {

  constructor(
    private modalRef: CDKModalRef,
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.close();
  }

  confirm(){
    this.modalRef.close(true);
  }

}

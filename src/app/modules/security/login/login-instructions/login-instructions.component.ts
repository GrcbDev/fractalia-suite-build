import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-login-instructions',
  templateUrl: './login-instructions.component.html',
  styleUrls: ['./login-instructions.component.scss']
})
export class LoginInstructionsComponent implements OnInit {
  intructions: string;
  constructor(
    private partnerService: PartnerService,
    private modalRef: CDKModalRef,
  ) { }

  ngOnInit() {
    this.intructions = this.partnerService.partner.loginInstructionsDescription;
  }

  closeModal() {
    this.modalRef.close();
  }


}

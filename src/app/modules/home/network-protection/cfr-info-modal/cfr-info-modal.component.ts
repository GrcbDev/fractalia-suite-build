import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cfr-info-modal',
  templateUrl: './cfr-info-modal.component.html',
  styleUrls: ['./cfr-info-modal.component.scss']
})
export class CfrInfoModalComponent implements OnInit {
  public staticContentUrl = environment.STATIC_CONTENT;
  constructor(
  private modalRef: CDKModalRef,



  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bms-info-service',
  templateUrl: './bms-info-service.component.html',
  styleUrls: ['./bms-info-service.component.scss']
})
export class BmsInfoServiceComponent implements OnInit {
  public staticContentUrl = environment.STATIC_CONTENT;
  serviceName: string;
  constructor(
    private modalRef: CDKModalRef,
  ) { }

  ngOnInit() {
   this.serviceName = this.modalRef.config.data.name;
  }

  closeModal() {
    this.modalRef.close();
  }

}

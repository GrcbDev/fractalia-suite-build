import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-msm-info-service',
  templateUrl: './msm-info-service.component.html',
  styleUrls: ['./msm-info-service.component.scss']
})
export class MSMInfoServiceComponent implements OnInit {
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

import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { MonitoredIdentitiesService } from 'src/app/services/monitored-identities.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-itp-warning-modal',
  templateUrl: './itp-warning-modal.component.html',
  styleUrls: ['./itp-warning-modal.component.scss']
})
export class ItpWarningModalComponent implements OnInit {
  breachedIdentity: any;
  loading: boolean;
  currentBreach: any[] = [];
  public staticContentUrl = environment.STATIC_CONTENT;
  @Input() data: string;
  constructor(
    // private modalRef: CDKModalRef,
    public activeModal: NgbActiveModal,
    private monitoredIdentitiesService: MonitoredIdentitiesService,
  ) { }

  ngOnInit() {
    this.breachedIdentity = this.data;
    this.getIdentityBreach();
  }

  closeModal() {
    this.activeModal.close();
    // this.modalRef.close();
  }

  getIdentityBreach(){
    this.loading = true;
    this.monitoredIdentitiesService.getIdentityBreach(this.breachedIdentity.identityId).then(
      result => {
        if(result.length > 0){
          this.currentBreach = result.map(x => x);
        }else{
          this.currentBreach = [{monitoredIdentityId: -1, domain: "", name: "", description: "", detectionDate: ""}];
        }
        this.loading = false;
      })
  }

}

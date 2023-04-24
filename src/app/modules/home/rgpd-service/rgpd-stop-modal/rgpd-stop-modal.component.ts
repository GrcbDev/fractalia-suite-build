import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rgpd-stop-modal',
  templateUrl: './rgpd-stop-modal.component.html',
  styleUrls: ['./rgpd-stop-modal.component.scss']
})
export class RgpdStopModalComponent implements OnInit {
  @Output() submitted = new EventEmitter<boolean>();
  public staticContentUrl = environment.STATIC_CONTENT;

  constructor(
    private translate: TranslateService,
    public activeModal: NgbActiveModal,
    private modalRef: CDKModalRef,
  ) { }

  ngOnInit(): void {}

  closeModal() {
    /* this.activeModal.dismiss();
    this.submitted.emit(true); */
    this.modalRef.close(true);
  }

  stayModal() {
    /* this.activeModal.dismiss();
    this.submitted.emit(false); */
    this.modalRef.close(false);
  }

  close() {
    /* this.activeModal.dismiss();
    this.submitted.emit(false); */
    this.modalRef.close(false);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RgpdService } from '../shared/rgpd.service';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';

@Component({
  selector: 'app-rgpd-finish-evaluation-modal',
  templateUrl: './rgpd-finish-evaluation-modal.component.html',
  styleUrls: ['./rgpd-finish-evaluation-modal.component.scss']
})
export class RgpdFinishEvaluationModalComponent implements OnInit {
  @Output() readonly submitted = new EventEmitter<boolean>();

  constructor(
    public rgpdservice: RgpdService,
    private translate: TranslateService,
    public activeModal: NgbActiveModal,
    private modalRef: CDKModalRef,
  ) { }

  ngOnInit(): void {
  }

  openStop() {
    /* this.submitted.emit(true);
    this.activeModal.dismiss('Cross click'); */
    this.modalRef.close(true);
  }
}

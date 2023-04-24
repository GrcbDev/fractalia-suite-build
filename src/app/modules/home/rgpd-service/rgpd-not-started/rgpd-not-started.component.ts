import { Component, Input, OnInit } from '@angular/core';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { RgpdEvaluationModalComponent } from '../rgpd-evaluation-modal/rgpd-evaluation-modal.component';
import { RgpdService } from 'src/app/modules/home/rgpd-service/shared/rgpd.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';

@Component({
  selector: 'app-rgpd-not-started',
  templateUrl: './rgpd-not-started.component.html',
  styleUrls: ['./rgpd-not-started.component.scss']
})
export class RgpdNotStartedComponent implements OnInit {
  @Input() data: any;
  service: any;
  loading: boolean = false;
  constructor(
    private CDKModalService: CDKModalService,
    public rgpdservice: RgpdService,
    public modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.service = this.data.service;
  }

  startQuiz() {
    const config = {
      modalClass: 'ds-modal-md',
      position: 'center',
    };
    const modal =  this.CDKModalService.open(RgpdEvaluationModalComponent, config);

    modal.afterClosed$.subscribe((confirm: boolean) => {
      if (confirm) {

      }
    });
  }


  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

}

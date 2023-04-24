import { Component, Input, OnInit } from '@angular/core';
import { RGPDRisk } from '../shared/rgpd-risk.enum';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { RgpdEvaluationModalComponent } from 'src/app/modules/home/rgpd-service/rgpd-evaluation-modal/rgpd-evaluation-modal.component';
import { RGPDSections } from '../shared/rgpd-section.enum';
import { RgpdService } from '../shared/rgpd.service';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { FileUtils } from 'src/app/utils/FileUtils';

@Component({
  selector: 'app-rgpd-results',
  templateUrl: './rgpd-results.component.html',
  styleUrls: ['./rgpd-results.component.scss']
})
export class RgpdResultsComponent implements OnInit {
  LowRisk = RGPDRisk.LowRisk;
  MediumRisk = RGPDRisk.MediumRisk;
  HighRisk = RGPDRisk.HighRisk;

  currentRisk = RGPDRisk.MediumRisk;

  @Input() data: any;
  service: any;
  loading: boolean = false;
  rgpdInformation: any = {};
  downloadLoading = false;
  constructor(
    public rgpdservice: RgpdService,
    public modalService: NgbModal,
    private CDKmodalService: CDKModalService,
  ) {}

  ngOnInit() {
    this.service = this.data.service;
    this.rgpdInformation = this.data.rgpdInformation;

    this.loadComponentByBussinesStrategy(this.rgpdInformation.evalResult);
  }

  loadComponentByBussinesStrategy(evalResult: number) {
    switch (evalResult) {
      case 1:
        this.currentRisk = RGPDRisk.LowRisk;
        break;
      case 2:
        this.currentRisk = RGPDRisk.MediumRisk;
        break;
      case 3:
        this.currentRisk = RGPDRisk.HighRisk;
        break;
      default:
        this.currentRisk = RGPDRisk.HighRisk;
        break;
    }
  }

  toggleEvaluation() {
    const config = {
      modalClass: 'ds-modal-md',
      position: 'center',
    };
    const modal =  this.CDKmodalService.open(RgpdEvaluationModalComponent, config);

    modal.afterClosed$.subscribe((confirm: boolean) => {
      if (confirm) {

      }
    });
  }

  goToModelForm() {
    this.rgpdservice.emitGoToSection(RGPDSections.ModelForm);
  }


  downloadModelForm() {
    this.downloadLoading = true;
    this.rgpdservice
        .downloadRgpdModelDocument()
        .pipe(
          tap((receivedFile: any) => {
            FileUtils.downloadBase64File("application/vnd.openxmlformats-officedocument.wordprocessingml.document", receivedFile,  "rgpd.docx")
          }),
          tap(()=> this.downloadLoading = false)
        )
        .subscribe();
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }
}

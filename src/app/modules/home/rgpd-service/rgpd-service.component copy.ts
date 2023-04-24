import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { FileUtils } from 'src/app/utils/FileUtils';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { ModalComponent } from '../cyberscoring-service/modal/modal.component';
import { RgpdEvaluationModalComponent } from './rgpd-evaluation-modal/rgpd-evaluation-modal.component';
import { RgpdService } from './shared/rgpd.service';

@Component({
  selector: 'app-rgpd-service',
  templateUrl: './rgpd-service.component.html',
  styleUrls: ['./rgpd-service.component.scss']
})
export class RgpdServiceComponent implements OnInit {
  @Input() data: any;
  public staticContentUrl = environment.STATIC_CONTENT;
  public isloading;


  downloadLoading = false;

  constructor(
    public userService: UserService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
    private router: Router,
    public rgpdservice: RgpdService,
  ) { }

  ngOnInit() {
    if (!this.data.longDesc) {
      this.loadServiceInfo();
    }

    /* if (this.rgpdservice.rgpd == null) {
    } */

    this.initial();
  }

  private initial() {
    this.loadRgpdInformation();
    this.loadFormEval();
  }

  private loadServiceInfo() {
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
          tap(res => { this.data = res; }),
          tap(() => this.isloading = false)
      )
      .subscribe();
  }

  private loadRgpdInformation() {
    this.isloading = true;
    this.rgpdservice.getRgpd().pipe(
      tap(res => { this.rgpdservice.rgpd = res; }),
      //tap(res => { console.log(res); }),
      tap(() => this.isloading = false)
    ).subscribe();
  }

  private loadFormEval() {
    this.isloading = true;
    this.rgpdservice.getFormEval().pipe(
      tap(res => { this.rgpdservice.formEval = res; }),
      //tap(res => { console.log(res); }),
      tap(() => this.isloading = false)
    ).subscribe();
  }

  public open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

  /* public downloadTRE() {
    window.open(this.rgpd.trendmicro.magiclink, "_blank");
  } */

  toggleEvaluation() {
    const data = this.rgpdservice.formEval;
    const modalRef = this.modalService.open(RgpdEvaluationModalComponent);
    modalRef.componentInstance.data = data;

    /* modalRef.close((data: any) => {
      console.log(data);
    }) */
    modalRef.componentInstance.submitted.subscribe(res => { this.initial(); });
    /* modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon; */
  }

  rebuildEvaluation() {
    const percent = ((this.rgpdservice.formEval.reduce( (elements, f) => {
      if(f.answerSelectedId !== 0) {
        return elements + 1;
      }

      return elements;
    }, 0) / this.rgpdservice.formEval.length) * 100).toFixed(0);

    if(Number(percent) >= 100) {
      this.isloading = true;
      let form = this.rgpdservice.formEval;

      form.map( f => f.answerSelectedId = 0);
      this.rgpdservice.formEval = form;
      this.rgpdservice.updateRgpd(form).pipe(
        tap(() => {
          this.isloading = false;
          this.toggleEvaluation();
        })
      ).subscribe();
    } else {
      this.toggleEvaluation();
    }
  }

  openRGPDFormModel() {
    this.router.navigate(["service/"+ this.data.code +"/rgpd-form-model"]);
  }

  downloadRGPDFormModel(){
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
}

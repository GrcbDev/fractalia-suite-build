import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { RgpdStopModalComponent } from 'src/app/modules/home/rgpd-service/rgpd-stop-modal/rgpd-stop-modal.component';
import { RgpdFinishEvaluationModalComponent } from 'src/app/modules/home/rgpd-service/rgpd-finish-evaluation-modal/rgpd-finish-evaluation-modal.component';
import { RgpdService } from '../shared/rgpd.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rgpd-evaluation-modal',
  templateUrl: './rgpd-evaluation-modal.component.html',
  styleUrls: ['./rgpd-evaluation-modal.component.scss']
})
export class RgpdEvaluationModalComponent implements OnInit {
  /* @Input() data: any; */
  data: any;
  @Output() readonly submitted = new EventEmitter();
  number: number = 0;
  loading: boolean = true;
  answer: number = 0;
  submit: boolean = false;
  loadingButton: boolean = false;
  actualProgress: string = '0%';
  myForm: FormGroup;
  isloading: boolean = false;
  public staticContentUrl = environment.STATIC_CONTENT;

  constructor(
    public activeModal: NgbActiveModal,
    public rgpdservice: RgpdService,
    private translate: TranslateService,
    public modalService: NgbModal,
    private fb: FormBuilder,
    private _router: Router,
    private CDKModalService: CDKModalService,
    private modalRef: CDKModalRef,
  ) {}

  ngOnInit(): void {
    this.loadFormEval();
  }

  loadFormEval() {
    this.isloading = true;

    this.rgpdservice.getFormEval()
    .pipe(
      tap((res: any) => { 
        this.rgpdservice.formEval = res;
        this.data = res;
        let find = this.data.findIndex( f => f.answerSelectedId === 0);
        this.calculatePercent();
        this.number = (find && find !== -1) ? find : 0;
        this.answer = this.data[this.number].answerSelectedId;
      }),
      tap(() => this.isloading = false)
    ).subscribe();
  }

  generateForm(): void {
    this.myForm = this.fb.group({});
    let form = this.data;

    form.forEach( field => {
      this.myForm.addControl(`question${field.questionId}`, this.fb.control('', [Validators.required]))
    });
  }

  calculatePercent() {
    this.actualProgress = ((this.rgpdservice.formEval.reduce( (elements, f) => {
      if(f.answerSelectedId !== 0) {
        return elements + 1;
      }

      return elements;
    }, 0) / this.rgpdservice.formEval.length) * 100).toFixed(0) + '%';

    const percent = ((this.rgpdservice.formEval.reduce( (elements, f) => {
      if(f.answerSelectedId !== 0) {
        return elements + 1;
      }

      return elements;
    }, 0) / this.rgpdservice.formEval.length) * 100).toFixed(0);

    if(Number(percent) >= 100) {
      this.isloading = true;
      let form = this.data;

      form.map( f => f.answerSelectedId = 0);
      this.data = form;
      this.rgpdservice.updateRgpd(form).pipe(
        tap(() => {
          this.isloading = false;
        })
      ).subscribe();
    }

    this.generateForm();
  }

  checkRadio() {
    let questionId = this.data[this.number].questionId;
    this.myForm.controls[`question${questionId}`].markAsPristine();
    if(this.data[this.number].answerSelectedId !== 0) {
      this.myForm.patchValue({
        [`question${questionId}`]: this.data[this.number].answerSelectedId
      });
    }

    console.log({myForm: this.myForm, form: this.rgpdservice.formEval});
  }

  back() {
    this.number = this.number - 1;
    this.submit = (this.data && this.data[this.number] && this.data[this.number].answerSelectedId) ? false : true;
    this.checkRadio();
  }

  next(status: boolean) {
    let questionId = this.data[this.number].questionId;

    if(!this.myForm.controls[`question${questionId}`].valid) {
      console.log(`invalid number ${questionId}`);
      return;
    }

    let dirty = this.myForm.controls[`question${questionId}`].dirty;
    let last = this.number === (this.data.length - 1);

    console.log({dirty, last});
    if(dirty) {
      let form = this.rgpdservice.formEval;
      this.loadingButton = true;

      let data = form.map((f: any) => {
        return {
          "questionId": f.questionId,
          "answerId": f.answerSelectedId
        }
      });

      this.rgpdservice.updateRgpd(data).pipe(
        tap(() => {
          this.number++
          this.answer = 0;
          if(!last) {
            this.checkRadio();
          }

          this.submit = (this.data && this.data[this.number] && this.data[this.number].answerSelectedId) ? false : true;
          this.loadingButton = false;
          this.calculatePercent();

          if(last) {
            this.loadRgpdInformation();
          }
        })
      ).subscribe();
    } else {
      this.number++
      this.answer = 0;
      this.checkRadio();
    }
  }

  loadRgpdInformation() {
    this.submit = true;
    this.rgpdservice.getRgpd().pipe(
      tap(res => { this.rgpdservice.rgpd = res; }),
      //tap(res => { console.log(res); }),
      tap(() => {
        this.submit = false;
        this.modalRef.close(true);
        /* this.activeModal.dismiss('Cross click'); */
        this.openFinish();
        //this.submitted.emit();
      })
    ).subscribe();
  }

  change(ev: any, answerId: any) {
    this.answer = answerId;
    this.rgpdservice.formEval[this.number].answerSelectedId = Number(answerId);
  }

  closeWizard() {
    this.activeModal.dismiss('Cross click')
  }

  openStop() {
    /* const modalRef = this.modalService.open(RgpdStopModalComponent);
    modalRef.componentInstance.submitted.subscribe((res: boolean) => {
      if(res) {
        //this.activeModal.dismiss('Cross click');
        this.modalRef.close();
      }
    }); */

    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    const modal = this.CDKModalService.open(RgpdStopModalComponent, config);

    modal.afterClosed$.subscribe((success: any) => {
      console.log({success});
      if(success) {
        this.modalRef.close();
        this.rgpdservice.emitReload(true);
      }
    });
  }

  openFinish() {
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    const modal = this.CDKModalService.open(RgpdFinishEvaluationModalComponent, config);

    modal.afterClosed$.subscribe((success: any) => {
      if(success) {
        /* this.modalRef.close(); */
        this.rgpdservice.emitReload(true);
      }
    });
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  get SaveDisabled() {
    let questionId = this.data[this.number].questionId;
    return !(this.myForm.controls[`question${questionId}`].valid) || this.loadingButton
  }
}

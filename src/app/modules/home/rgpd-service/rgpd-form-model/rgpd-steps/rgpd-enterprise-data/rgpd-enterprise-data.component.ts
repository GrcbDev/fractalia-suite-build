import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { catchError, tap } from 'rxjs/operators';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { MessageService } from 'src/app/services/message.service';
import { ImageUtils } from 'src/app/utils/ImageUtils';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { RgpdUpdateConfirmComponent } from '../../rgpd-update-confirm/rgpd-update-confirm.component';
import { RgpdService } from '../../../shared/rgpd.service';
import { RGPDSteps } from '../../../shared/rgpd-steps.enum';
import { Router } from '@angular/router';
import { RGPDSections } from '../../../shared/rgpd-section.enum';

@Component({
  selector: 'app-rgpd-enterprise-data',
  templateUrl: './rgpd-enterprise-data.component.html',
  styleUrls: ['./rgpd-enterprise-data.component.scss']
})
export class RgpdEnterpriseDataComponent implements OnInit {
  @Input() data: any;

  enterpriseDataForm: FormGroup;
  image: string = '';

  formApiData: any;

  loading = false;
  savedSuccessfully = false;

  editMode: boolean = false;
  service: any;
  constructor(
    private rgpdService: RgpdService,
    public sanitizer: DomSanitizer,
    private translate: TranslateService,
    private messageService: MessageService,
    private reactiveFormService: ReactiveFormService,
    private CDKModalService: CDKModalService,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.formApiData = this.data.currentStepData;
    this.service = this.data.service;
    this.editMode = this.rgpdService.rgpdData.finished;
    this.setFormValues();
  }

  setFormValues() {
    if(this.formApiData.logo && this.formApiData.logo != "/") {
      this.image = this.formApiData.logo
    }
    const formValues = {
      companyName: this.formApiData.companyName,
      country: this.formApiData.country,
      cif: this.formApiData.cif,
      city: this.formApiData.city,
      phone: this.formApiData.phone,
      companyEmail: this.formApiData.companyEmail,
      rightsEmail: this.formApiData.rightsEmail,
      postalCode: this.formApiData.postalCode,
      address: this.formApiData.address,
      businessActivity: this.formApiData.businessActivity
    }
    this.enterpriseDataForm.patchValue(formValues);
  }

  onUploadImagen($event: any) {
    const target = $event.target;
    if (target.files != null) {
      if (target.files.length > 0) {
        const file = target.files[0];
        const value = target.value.toLowerCase();
        const ext = value.split(".").pop();
        const name = target.name.toLowerCase();
        let exts = ["png", "jpg", "jpeg", "gif"];
        if (name == "favicon") {
          exts = ["png", "jpg", "jpeg", "gif", "ico"];
        }
        if (exts.indexOf(ext) != -1) {
          ImageUtils.getBase64(file).then((result) => {
            ImageUtils.compressImage(result, 100, 100).then((compressed) => {
              this.image = compressed;
            });
          });
        } else {
          this.translate
            .get("ONLY_IMAGES_ERROR")
            .subscribe((res) => this.messageService.add(res, "error"));
        }
      }
    }
  }

  createForm() {
    this.enterpriseDataForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      cif: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      companyEmail: new FormControl('', [Validators.required]),
      rightsEmail: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      businessActivity: new FormControl('', [Validators.required])
    });
  }

  nextStep() {
    if(this.editMode) {
      this.rgpdService.emitGoToStep(RGPDSteps.Clients);
    } else {
      this.saveFormData();
    }
  }

  updateStep() {
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    const modal =  this.CDKModalService.open(RgpdUpdateConfirmComponent, config);
    modal.afterClosed$.subscribe((confirm: boolean) => {
      if (confirm) {
        this.saveFormData(true);
      }
    });
  }

  saveFormData(isEditMode?: boolean) {
    this.reactiveFormService.markFormGroupTouched(this.enterpriseDataForm);
    if(this.enterpriseDataForm.valid) {
      this.loading = true;

      const formValues = this.enterpriseDataForm.getRawValue();
      this.formApiData.companyName = formValues.companyName;
      this.formApiData.country = formValues.country;
      this.formApiData.cif = formValues.cif;
      this.formApiData.city = formValues.city;
      this.formApiData.phone = formValues.phone;
      this.formApiData.companyEmail = formValues.companyEmail;
      this.formApiData.rightsEmail = formValues.rightsEmail;
      this.formApiData.postalCode = formValues.postalCode;
      this.formApiData.address = formValues.address;
      this.formApiData.businessActivity = formValues.businessActivity;

      if(this.image && this.image != "/") {
        this.formApiData.logo = this.image;
      }

      const findSection = this.formApiData.sections.findIndex(section => section.sectionId === RGPDSteps.EnterpriseData);

      if(findSection >= 0) {
        this.formApiData.sections[findSection].completed = true;
      }

      this.rgpdService.saveRgpdData(this.formApiData)
      .pipe(
        tap(() => { this.savedSuccessfully = true, this.loading = false } ),
        tap(() => {
          if(isEditMode) {
            this.rgpdService.emitGoToSection(RGPDSections.Results);
          } else {
            this.rgpdService.emitGoToStep(RGPDSteps.Clients)
          }
        }),
        catchError(async () =>{
          this.loading = false
        })
      )
      .subscribe();
    }
  }

}

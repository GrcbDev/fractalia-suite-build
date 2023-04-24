import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { tap, catchError } from 'rxjs/operators';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';

import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { RgpdUpdateConfirmComponent } from '../../rgpd-update-confirm/rgpd-update-confirm.component';
import { RgpdService } from '../../../shared/rgpd.service';
import { RGPDSteps } from '../../../shared/rgpd-steps.enum';
import { Router } from '@angular/router';
import { RGPDSections } from '../../../shared/rgpd-section.enum';

@Component({
  selector: 'app-rgpd-employees',
  templateUrl: './rgpd-employees.component.html',
  styleUrls: ['./rgpd-employees.component.scss']
})
export class RgpdEmployeesComponent implements OnInit {

  @Input() data: any;

  stepForm: FormGroup;
  thirdCompanyForm: FormGroup;
  formApiData: any;

  agentList: any[] = [];
  loading = false;
  savedSuccessfully = false;
  editMode: boolean = false;
  service: any;
  thirdTypeCompaniesSelect: any = [];
  constructor(
    private rgpdService: RgpdService,
    private fb: FormBuilder,
    private reactiveFormService: ReactiveFormService,
    private CDKModalService: CDKModalService,
    private router: Router,
  ) {
    this.createForm();
  }

  get questionsForm(): FormArray {
    return this.stepForm.get("questions") as FormArray;
  }

  ngOnInit() {
    this.formApiData = this.data.currentStepData;
    this.service = this.data.service;
    this.editMode = this.rgpdService.rgpdData.finished;
    this.addControlsToDynamicForm();
    this.setInitialValues();
  }


  setInitialValues() {
    this.stepForm.get('sectionQuestion').setValue(this.formApiData.enabled);
    this.onChangeMainQuestion();
  }


  addAgent() {
    this.reactiveFormService.markFormGroupTouched(this.thirdCompanyForm);
    if(this.thirdCompanyForm.valid) {
      const values = this.thirdCompanyForm.value;
      const itemToPush: any = {
        name: values.name,
        cif: values.name,
        address: values.address,
        serviceProvided: values.serviceProvided,
      };
      if(values.type) {
        const findEnteprise = this.thirdTypeCompaniesSelect.find(x => x.rgpdModelThirdTypeCompaniesId == values.type);
        itemToPush.enterpriseType = findEnteprise.thirdTypeCompany;
      }
      this.agentList.push(itemToPush);

      this.thirdCompanyForm.reset(
        {
          thirdCompanyTitle: this.formApiData.companiesTitle,
          thirdCompanySubtitle: this.formApiData.companiesSubtitle,
        }
      );
      this.stepForm.markAsDirty();
    }
  }

  onDeleteAgent(index: number) {
    this.agentList.splice(index, 1);
    this.stepForm.markAsDirty();
  }

  createForm() {
    this.stepForm = new FormGroup({
      sectionQuestion: new FormControl(false, [Validators.required]),
      questions: new FormArray([]),
    });

    this.thirdCompanyForm = new FormGroup({
      name: new FormControl({ value: "", disabled: true} , [Validators.required]),
      cif: new FormControl({ value: "", disabled: true} , [Validators.required]),
      address: new FormControl({ value: "", disabled: true} , [Validators.required]),
      serviceProvided: new FormControl({ value: "", disabled: true} , [Validators.required]),
    });
  }

  onChangeMainQuestion() {
    const sectionQuestionValue = this.stepForm.get("sectionQuestion").value;
    if(sectionQuestionValue) {
      this.reactiveFormService.markFormAsEnabled(this.questionsForm);
      this.reactiveFormService.markFormAsEnabled(this.thirdCompanyForm);
    } else {
      this.reactiveFormService.markFormAsDisabled(this.questionsForm);
      this.reactiveFormService.markFormAsDisabled(this.thirdCompanyForm);
    }
  }

  nextStep() {
    if(this.editMode) {
      this.rgpdService.emitGoToStep(RGPDSteps.Candidates);
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
    this.reactiveFormService.markFormAsEnabled(this.stepForm);
    if(this.questionsForm.valid && this.stepForm.valid) {
      this.loading = true;
      const formValues = this.questionsForm.getRawValue();
      this.rgpdService.proccessDataToUpdate(RGPDSteps.Employees, { stepForm : this.stepForm, formValues: formValues, agentList: this.agentList });

      this.rgpdService.saveRgpdData(this.rgpdService.rgpdData)
      .pipe(
        tap(() => { this.savedSuccessfully = true, this.loading = false } ),
        tap(() => {
          if(isEditMode) {
            this.rgpdService.emitGoToSection(RGPDSections.Results);
          } else {
            this.rgpdService.emitGoToStep(RGPDSteps.Candidates)
          }
        }),
        catchError(async () =>{
          this.loading = false
        })
      )
      .subscribe();
    }
  }

  previusStep() {
    this.rgpdService.emitGoToStep(RGPDSteps.PotentialClients);
  }

  addControlsToDynamicForm() {
    this.addMainQuestion();

    if(this.formApiData.questions && this.formApiData.questions.length) {
      this.addDynamicQuestions();
    }

    if(this.formApiData.hasCompanies) {
      this.addDynamicThirdCompany();
    }
  }

  addMainQuestion() {
    this.stepForm.addControl('sectionQuestionTitle', new FormControl(this.formApiData.sectionQuestion, null))
    this.stepForm.addControl('sectionQuestionDescription', new FormControl(this.formApiData.sectionExplanation, null))
  }

  addDynamicQuestions() {
    const list = this.formApiData.questions;

    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      const answersForm = element.possibleAnswers.map((question) => {
               let isChecked = false;
        if(element.answersSelected && element.answersSelected.length > 0) {
          isChecked = element.answersSelected.find((x) => x == question.answerId) ? true : false;
        }
        const itemForm: any = {
          isChecked: new FormControl({ value: isChecked, disabled: true}, null),
          answerName: new FormControl({ value: question.answer, disabled: true}, null),
          answerId: new FormControl({ value: question.answerId, disabled: true}, null),
          hasFieldOther: new FormControl({ value: question.hasFieldOther, disabled: true}, null),
        };
        if(question.hasFieldOther) {
          itemForm.otherField = new FormControl({ value: element?.other, disabled: true}, null);
        }
        return  this.fb.group(itemForm);
      });

      this.questionsForm.push(
        this.fb.group({
          questionName: new FormControl({ value: element.question, disabled: true}, null),
          questionId: new FormControl({ value: element.questionId, disabled: true}, null),
          answers: this.fb.array(answersForm)
        })
      );
    }
  }

  addDynamicThirdCompany() {
    this.thirdCompanyForm.addControl('thirdCompanyTitle', new FormControl(this.formApiData.companiesTitle, null));
    this.thirdCompanyForm.addControl('thirdCompanySubtitle', new FormControl(this.formApiData.companiesSubtitle, null));

    const thirdCompanies = this.formApiData.thirdCompanies;

    this.thirdTypeCompaniesSelect = this.formApiData.possibleThirdTypeCompanies;

    this.agentList = thirdCompanies.map((company) => {
      if(company.type) {
        company.enterpriseType = this.thirdTypeCompaniesSelect.find(x => x.rgpdModelThirdTypeCompaniesId == company.type).thirdTypeCompany;
      }
      return company;
    });
  }


  verifyOtherField(ix: number, iy: number) {
    const answers = this.questionsForm.at(ix).get('answers') as FormArray;
    const hasFieldOther = answers.at(iy).get('hasFieldOther').value;
    const otherField = answers.at(iy).get('otherField');
    const isChecked = answers.at(iy).get('isChecked').value;

    if(hasFieldOther && otherField) {
      if(isChecked) {
        otherField.setValidators([Validators.required]);
        otherField.updateValueAndValidity();
        otherField.markAsUntouched();
      } else {
        otherField.setValue(null);
        otherField.setValidators([]);
        otherField.updateValueAndValidity();
      }
    }
  }
}

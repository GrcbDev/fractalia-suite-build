import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { rgpdData } from './data';
import { RGPDSteps } from './rgpd-steps.enum';
import { RGPDSections } from './rgpd-section.enum';

@Injectable({
  providedIn: 'root'
})
export class RgpdService {
  changeStep$ : BehaviorSubject<any> = new BehaviorSubject(null);
  nextStep$ : BehaviorSubject<any> = new BehaviorSubject(null);
  reload$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  section$: BehaviorSubject<any> = new BehaviorSubject(null);

  rgpdData: any;
  rgpd: any;
  formEval: any;
  constructor(private httpClient: HttpClient) { }

  emitChangeStep(value: any) {
    this.changeStep$.next(value);
  }


  emitReload(value?: any){
    this.reload$.next(value);
  }

  emitGoToSection(section?: RGPDSections){
    this.section$.next(section);
  }


  emitGoToStep(step: any) {
    this.nextStep$.next(step);
  }

  getRgpdData() {
    return this.httpClient.get(environment.apiEndpoint + "api/rgpd/formmodel");
  }


  saveRgpdData(data: any) {
    return this.httpClient.put(environment.apiEndpoint + "api/rgpd/formmodel", data);
  }

  updateRgpdDataLocal(data: any) {
    this.rgpdData = data;
  }

  getRgpdDataLocal() {
    return this.rgpdData;
  }


  proccessDataToUpdate(step: RGPDSteps, stepData: any) {
    const findSection = this.rgpdData.sections.findIndex(section => section.sectionId === step);
    this.rgpdData.sections[findSection].completed = true;
    this.rgpdData.sections[findSection].enabled = stepData.stepForm.get('sectionQuestion').value;

    if(this.rgpdData.sections[findSection].questions && this.rgpdData.sections[findSection].questions.length) {
      for (let index = 0; index < this.rgpdData.sections[findSection].questions.length; index++) {
        const element = this.rgpdData.sections[findSection].questions[index];

        if(this.rgpdData.sections[findSection].enabled) {
          const findValues = stepData.formValues.find(x => x.questionId === element.questionId);

          if(findValues.answers && findValues.answers.length) {
            const answersSelecteds = findValues.answers.filter(x => x.isChecked);
            const haveOtherField = answersSelecteds.find(x => x.hasFieldOther);
            if(haveOtherField) {
              element.other = haveOtherField.otherField;
            } else{
              element.other = "";
            }
            element.answersSelected = answersSelecteds.map(x => x.answerId);
          }
        } else {
          element.answersSelected = [];
          element.other = "";
        }
      }
    }
    if(this.rgpdData.sections[findSection].enabled) {
      this.rgpdData.sections[findSection].thirdCompanies = stepData.agentList.map(x=> x);
    } else{
      this.rgpdData.sections[findSection].thirdCompanies = [];
    }
  }


  generateRgpdModelDocument(){
    return this.httpClient.get(environment.apiEndpoint + "api/rgpd/generatemodel");
  }

  downloadRgpdModelDocument() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    let params = new HttpParams();
    return this.httpClient.get(environment.apiEndpoint + "api/rgpd/getmodelfile",  { headers, params,  responseType: 'text' });
  }

  getRgpd() {
    let params = new HttpParams();
    return this.httpClient.get<any>(environment.apiEndpoint + "api/rgpd/getstatus", { params });
  }

  getFormEval() {
    let params = new HttpParams();
    return this.httpClient.get<any>(environment.apiEndpoint + "api/rgpd/formeval", { params });
  }

  updateRgpd(data: any) {
    let params = new HttpParams();
    return this.httpClient.put<any>(environment.apiEndpoint + "api/rgpd/formeval", data, { params });
  }

}

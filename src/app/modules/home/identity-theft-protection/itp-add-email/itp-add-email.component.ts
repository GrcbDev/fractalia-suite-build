import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { MonitoredIdentity } from 'src/app/models/monitoredIdentity';
import { User } from 'src/app/models/user';
import { MessageService } from 'src/app/services/message.service';
import { MonitoredIdentitiesService } from 'src/app/services/monitored-identities.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from "rxjs";
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { environment } from 'src/environments/environment';
import { NEW_ITEM } from 'src/app/components/dropdown/shared/dropdown-conts';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { AddProfileComponent } from 'src/app/modules/poc/add-profile/add-profile.component';
import { FamilyUnitService } from 'src/app/modules/poc/shared/family-unit.service';
import { filter, tap } from 'rxjs/operators';
import { FAMILY_UNIT_MAX_PROFILES } from 'src/app/modules/poc/shared/famiy-unit-const';


@Component({
  selector: 'app-itp-add-email',
  templateUrl: './itp-add-email.component.html',
  styleUrls: ['./itp-add-email.component.scss']
})
export class ItpAddEmailComponent implements OnInit {
  itpAddEmailForm: FormGroup;
  itpSuccess: boolean = false;
  loading = false;

  emails: any[] = [];
  maxCardsByUser: number;
  emailMessage = null;

  emailsOfTheGeneralList: any = [];
  userProfileList: any[] = [];
  public currentUser: User;
  public currentUserSubscription: Subscription;
  selectItems: any[] = [];
  staticContentUrl = environment.STATIC_CONTENT;
  defaultImagen : string = this.staticContentUrl + 'img/family-unit/fi-cnsuxl-user-circle.png';
  service:any;
  modalData: any;
  // TODO: llamar a un servicio y usar esta variable
  familyUnitMaxProfiles = FAMILY_UNIT_MAX_PROFILES;
  constructor(
    private modalRef: CDKModalRef,
    public userService: UserService,
    public messageService: MessageService,
    private monitoredIdentitiesService: MonitoredIdentitiesService,
    public translate: TranslateService,
    public suiteService: SuiteService,
    private reactiveFormService: ReactiveFormService,
    private CDKmodalService: CDKModalService,
    private familyUnitService: FamilyUnitService,
  ) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
  }

  ngOnInit() {
    this.modalData = this.modalRef.config.data;
    this.proccessEmailsOfTheGeneralList()
    //this.maxCardsByUser = Number(localStorage.getItem('maxCardsByUser'));
    if (localStorage.getItem('maxIdentitiesByUser'))
      this.maxCardsByUser = Number(localStorage.getItem('maxIdentitiesByUser'));

    this.createForm();
    this.getFamilyProfiles(this.currentUser.id);
    this.service = this.modalData.service;
    this.watchModalChange();
  }

  proccessEmailsOfTheGeneralList() {
    if (this.modalData && this.modalData.cards.length) {
      this.emailsOfTheGeneralList = this.modalData.cards.map(x => x.identity);
    }
  }

  createForm() {
    this.itpAddEmailForm = new FormGroup(
      {
        selectProfile: new FormControl("", null),
        email: new FormControl('', [Validators.email])
      }
    )
  }


  addEmail() {
    const email = this.itpAddEmailForm.get('email');
    if (this.itpAddEmailForm.valid) {
      const lenghtFinal = this.emails.length + this.emailsOfTheGeneralList.length;
      if (lenghtFinal === this.maxCardsByUser) {
        this.showErrorMessage(this.translate.instant('CYBERALARM.IDENTITIES.MAX_LIMIT_EMAIL'));
        //this.showErrorMessage('Has alcanzado el número emails permitidos');
      } else {
        const alreadyEmail =
          this.emails.some(x => x.email === email.value) ||
          this.emailsOfTheGeneralList.some(x => x === email.value);

        if (alreadyEmail) {
          this.showErrorMessage(this.translate.instant('COMP_USER.APIPROVISION.MESSAGE.4'));
          //this.showErrorMessage('El email ya se encuentra registrado');
        } else {
          this.emails.push({
            email: email.value,
          });
          email.setValue('')
        }
      }
    }
  }

  showErrorMessage(message: string) {
    this.emailMessage = message;
    setTimeout(() => this.emailMessage = null, 2500);
  }

  closeModal() {
    this.emails = [];
    this.modalRef.close();
  }

  onChangeProfile(event) {
    if(event.key === NEW_ITEM) {
      this.addProfile();
      this.itpAddEmailForm.get('selectProfile').setValue('');
    }
  }

  addProfile(){
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.CDKmodalService.open(AddProfileComponent, config);
  }


  saveAddEmailForm() {
    this.reactiveFormService.markFormGroupTouched(this.itpAddEmailForm);
    if (this.emails.length > 0) {
      this.loading = true;
      const formValues = this.itpAddEmailForm.getRawValue();
      const sendData = this.emails.map(element => {
        const monitoredIdentity = new MonitoredIdentity();
        monitoredIdentity.identity = element.email.trim();
        monitoredIdentity.partnerSuiteId = this.userService.selSuiteId;
        monitoredIdentity.userProfileId = formValues.selectProfile ? formValues.selectProfile.key : 0;
        return monitoredIdentity;
      });
      this.translate.get('REQUEST_SERVICE').subscribe(res => this.messageService.add(res, "ok"));
      this.monitoredIdentitiesService.addMonitoredIdentities(sendData).then(
        result => {
          if (result) {
            this.messageService.add(this.translate.instant('CYBERALARM.IDENTITIES.ADD_FORM.RESULT_OK'), "ok");
            this.itpSuccess = true;
            this.monitoredIdentitiesService.emitReload(true);
          }
          else {
            this.messageService.add(this.translate.instant('CYBERALARM.IDENTITIES.ADD_FORM.RESULT_ERROR'), "error");
          }
          this.loading = false;
        });
    }
  }

  /// Borrar datos de correo.
  deleteEmail(item: any) {
    try {
      let emailsAux = [];
      if (this.emails && this.emails.length > 0) {
        for (let index = 0; index < this.emails.length; index++) {
          const e = this.emails[index];
          if (e && item && e.email !== item.email) {
            emailsAux.push(e);
          }
        }

        this.emails = emailsAux;
      }
    } catch ({ message }) {
      console.log(message);
    }
  }

  getFamilyProfiles(userId: number) {
    if (this.suiteService.isUnitFamily) {
      this.userService.getFamilyProfiles(userId).then(
        (resp: any) => {
          if (resp.length > 0) {
            this.addOwnerByDefault();
            this.userProfileList = this.userProfileList.concat(resp);
            this.formatItemToCustomSelect();
            const selectProfile = this.itpAddEmailForm.get('selectProfile');
            selectProfile.setValidators([Validators.required]);
            selectProfile.updateValueAndValidity();
          } else {
            this.addOwnerByDefault();
            this.formatItemToCustomSelect();
          }
        },
        (error) => {
          console.warn(error);
        }
      );

    }
  }

  addOwnerByDefault() {
    this.userProfileList = [{
      userProfileId: 0,
      userId: this.currentUser.id,
      name: this.currentUser.name,
      surname: this.currentUser.surname,
      email: this.currentUser.email,
      isOwnerAccount: true,
      photo: this.currentUser.profileImage ? this.currentUser.profileImage : this.defaultImagen
    }];
  }


  formatItemToCustomSelect() {
    const userProfileItems = this.userProfileList.map(x => {
      const item = {
        key: x.userProfileId ,
        value: x.name +  " " + x.surname,
        imagenPath: x.photo ? x.photo : this.defaultImagen,
      }
      return item;
    });
    if(this.userProfileList.length <= this.familyUnitMaxProfiles){
      const addNewItem = [{
        key: NEW_ITEM,
        value: this.translate.instant('FAMILY_UNIT.CREATE_NEW_PROFILE'),
        imagenPath: '',
        iconName: 'icon-plus'
      }]
      this.selectItems = userProfileItems.concat(addNewItem);
    } else {
      this.selectItems = userProfileItems;
    }
  }

  watchModalChange(){
    this.familyUnitService.familyUnitChange$
      .pipe(
        filter(data => !!data),
        tap(() => this.cleanData()),
        tap(() =>  this.getFamilyProfiles(this.currentUser.id)),
      )
      .subscribe();
  }

  cleanData() {
    this.selectItems = [];
    this.userProfileList = [];
  }

}

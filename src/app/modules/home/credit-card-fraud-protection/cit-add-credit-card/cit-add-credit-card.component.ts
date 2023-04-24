import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { filter, tap } from 'rxjs/operators';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { NEW_ITEM } from 'src/app/components/dropdown/shared/dropdown-conts';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { MonitoredCard } from 'src/app/models/monitoredCard';
import { AddProfileComponent } from 'src/app/modules/poc/add-profile/add-profile.component';
import { FamilyUnitService } from 'src/app/modules/poc/shared/family-unit.service';
import { FAMILY_UNIT_MAX_PROFILES } from 'src/app/modules/poc/shared/famiy-unit-const';
import { MessageService } from 'src/app/services/message.service';
import { MonitoredCardsService } from 'src/app/services/monitored-cards.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { ImageUtils } from 'src/app/utils/ImageUtils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cit-add-credit-card',
  templateUrl: './cit-add-credit-card.component.html',
  styleUrls: ['./cit-add-credit-card.component.scss']
})
export class CitAddCreditCardComponent implements OnInit {
  citAddEmailForm: FormGroup;
  citSuccess: boolean = false;
  loading = false;
  creditCardAddedd: any[] = [];
  maxCardsByUser: number;
  emailMessage = null;
  cardsOfTheGeneralList: any = [];
  userProfileList: any[] = [];
  selectItems: any[] = [];
  staticContentUrl = environment.STATIC_CONTENT;
  defaultImagen : string = this.staticContentUrl + 'img/family-unit/fi-cnsuxl-user-circle.png';
  service:any;
  modalData: any;
  currentUser: any;
  dropdownInitial: string = '';

  // TODO: llamar a un servicio y usar esta variable
  familyUnitMaxProfiles = FAMILY_UNIT_MAX_PROFILES;
  constructor(
    private modalRef: CDKModalRef,
    public userService: UserService,
    public messageService: MessageService,
    public monitoredCardsService: MonitoredCardsService,
    public translate: TranslateService,
    public suiteService: SuiteService,
    private reactiveFormService: ReactiveFormService,
    private CDKmodalService: CDKModalService,
    private familyUnitService: FamilyUnitService,
  ) {
  }

  ngOnInit() {
    this.currentUser = this.userService.currentUserValue;
    this.modalData = this.modalRef.config.data;
    this.proccessCardsOfTheGeneralList()

    this.maxCardsByUser = Number(localStorage.getItem('maxCardsByUser'));

    this.createForm();
    this.getFamilyProfiles(this.currentUser.id, false);
    this.service = this.modalData.service;
    this.watchModalChange();
  }

  get inputCard() {
    return this.citAddEmailForm.get("numberCard");
  }
  get inputAlias() {
    return this.citAddEmailForm.get("alias");
  }
  get inputProfile() {
    return this.citAddEmailForm.get("selectProfile");
  }

  proccessCardsOfTheGeneralList() {
    if (this.modalData && this.modalData.cards.length) {
      this.cardsOfTheGeneralList = this.modalData.cards.map(x => x.identity);
    }
  }

  createForm() {
    this.citAddEmailForm = new FormGroup(
      {
        selectProfile: new FormControl("", null),
        alias: new FormControl("", [
          Validators.required,
          Validators.pattern("^[A-Za-z0-9!@#-_?¿¡! s$]{4,}$"),
        ]),
        numberCard: new FormControl("", [Validators.pattern("^\\d{16,19}$")]),
      }
    )
  }


  addCard() {
    // const creditCardAlias = this.citAddEmailForm.get('alias');
    const creditCardNumber = this.citAddEmailForm.get('numberCard');
    const alias = this.citAddEmailForm.get('alias');
    const profile = this.citAddEmailForm.get('selectProfile');
    if (this.citAddEmailForm.valid) {
      const lenghtFinal = this.creditCardAddedd.length + this.cardsOfTheGeneralList.length;
      if (lenghtFinal === this.maxCardsByUser) {
        this.showErrorMessage('Has alcanzado el número tarjetas permitidos');
      } else {
        const alreadyEmail =
          this.creditCardAddedd.some(x => x.creditCardNumber === creditCardNumber.value) ||
          this.cardsOfTheGeneralList.some(x => x === creditCardNumber.value);

        if (alreadyEmail) {
          this.showErrorMessage('La tarjeta ya se encuentra registrada');
        } else {
          if(profile) {
            this.creditCardAddedd.push({
              selectProfile: profile.value,
              numberCard: creditCardNumber.value,
              alias: alias.value
            });
          } else {
            this.creditCardAddedd.push({
              numberCard: creditCardNumber.value,
              alias: alias.value
            });
          }
          
          creditCardNumber.setValue('')
          this.citAddEmailForm.reset();
        }
      }
    }
  }

  showErrorMessage(message: string) {
    this.emailMessage = message;
    setTimeout(() => this.emailMessage = null, 2500);
  }

  closeModal() {
    this.creditCardAddedd = [];
    this.modalRef.close();
  }

  onChangeProfile(event) {
    if(event.key === NEW_ITEM) {
      this.addProfile();
      this.citAddEmailForm.get('selectProfile').setValue('');
    }
  }

  addProfile(){
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.CDKmodalService.open(AddProfileComponent, config)
  }


  saveAddForm() {
    this.reactiveFormService.markFormGroupTouched(this.citAddEmailForm);
    console.log({creditCardAddedd: this.creditCardAddedd});
    if (this.creditCardAddedd.length > 0) {
      this.loading = true;
      const formValues = this.citAddEmailForm.getRawValue();
      const sendData = this.creditCardAddedd.map(element => {
        const monitoredIdentity = new MonitoredCard();
        monitoredIdentity.alias = element.alias.trim();
        monitoredIdentity.numberCard = element.numberCard.trim();
        monitoredIdentity.partnerSuiteId = this.userService.selSuiteId;
        monitoredIdentity.userProfileId = element.selectProfile ? element.selectProfile.key : 0;
        //monitoredIdentity.userProfileId = formValues.selectProfile ? formValues.selectProfile.key : 0;
        return monitoredIdentity;
      });
      this.translate.get('REQUEST_SERVICE').subscribe(res => this.messageService.add(res, "ok"));
      this.monitoredCardsService.addMonitoredCard(sendData).then(
        result => {
          if (result) {
            this.messageService.add(this.translate.instant('CYBERALARM.CARDS.ADD_FORM.RESULT_OK'), "ok");
            this.citSuccess = true;
            this.monitoredCardsService.emitReload(true);
          }
          else {
            this.messageService.add(this.translate.instant('CYBERALARM.CARDS.ADD_FORM.RESULT_ERROR'), "error");
          }
          this.loading = false;
        }).catch( err => {
          this.loading = false;
        });
    }
  }

  deleteCard(item: any) {
    try {
      let listAux = [];
      if (this.creditCardAddedd && this.creditCardAddedd.length > 0) {
        for (let index = 0; index < this.creditCardAddedd.length; index++) {
          const e = this.creditCardAddedd[index];
          if (e && item && e.numberCard !== item.numberCard) {
            listAux.push(e);
          }
        }

        this.creditCardAddedd = listAux;
      }
    } catch ({ message }) {
      console.log(message);
    }
  }

  getFamilyProfiles(userId: number, status: boolean) {
    if (this.suiteService.isUnitFamily) {
      this.userService.getFamilyProfiles(userId).then(
        (resp: any) => {
          if (resp.length > 0) {
            const noCacheResults = resp.map(x => {
              const item = x;
              item.photo = x.photo ? ImageUtils.noCacheImagen(x.photo) : '';
              return item;
            })
            this.addOwnerByDefault();
            this.userProfileList = this.userProfileList.concat(noCacheResults);
            this.formatItemToCustomSelect(status);
            const selectProfile = this.citAddEmailForm.get('selectProfile');
            selectProfile.setValidators([Validators.required]);
            selectProfile.updateValueAndValidity();
          } else {
            this.addOwnerByDefault();
            this.formatItemToCustomSelect(status);
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


  async formatItemToCustomSelect(status:boolean) {
    const userProfileItems = await this.userProfileList.map(x => {
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

    if(status) {
      const last = this.selectItems[this.selectItems.length - 2];
      await this.citAddEmailForm.patchValue({
        selectProfile: last
      })

      this.dropdownInitial = last.key;
    }
  }

  watchModalChange(){
    this.familyUnitService.familyUnitChange$
      .pipe(
        filter(data => !!data),
        tap(() => this.cleanData()),
        tap(() =>  this.getFamilyProfiles(this.currentUser.id, true)),
      )
      .subscribe();
  }

  cleanData() {
    this.selectItems = [];
    this.userProfileList = [];
  }

  maskCreditCard(creditCardNumber) { 
    let maskedNumber = []; 
   
    for (let i = 0; i < creditCardNumber.length; i++) { 
      if (i < creditCardNumber.length - 4) { 
        maskedNumber.push("*"); 
      } else { 
        maskedNumber.push(creditCardNumber[i]); 
      } 
    } 
   
    return maskedNumber.join("");
  }
}

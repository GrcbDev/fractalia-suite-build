import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { filter, tap } from "rxjs/operators";
import { MonitoredCard } from "src/app/models/monitoredCard";
import { User } from "src/app/models/user";
import { SidebarService } from "src/app/modules/shared/sidebar-menu.service";
import { DashboardUserService } from "src/app/services/dashboard-user.service";
import { MessageService } from "src/app/services/message.service";
import { MonitoredCardsService } from "src/app/services/monitored-cards.service";
import { SuiteService } from "src/app/services/suite.service";
import { UserService } from "src/app/services/user.service";
import { ModalComponent } from "../../modal/modal.component";
import { Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { ImageUtils } from "src/app/utils/ImageUtils";
import { NEW_ITEM } from "src/app/components/dropdown/shared/dropdown-conts";
import { FamilyUnitService } from "src/app/modules/poc/shared/family-unit.service";
import { CDKModalService } from "src/app/components/cdk-modal/services/cdk-modal.service";
import { AddProfileComponent } from "src/app/modules/poc/add-profile/add-profile.component";
import { FAMILY_UNIT_MAX_PROFILES } from "src/app/modules/poc/shared/famiy-unit-const";

declare var $: any;

@Component({
  selector: "app-monitored-cards-integrated",
  templateUrl: "./monitored-cards-integrated.component.html",
  styleUrls: ["./monitored-cards-integrated.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MonitoredCardsIntegratedComponent implements OnInit {
  @Input() serviceCard?: boolean = false;
  @Input() data: any;
  @ViewChild("numberCard") numberCard: ElementRef;
  @ViewChild("alias") alias: ElementRef;
  public staticContentUrl = environment.STATIC_CONTENT;
  public dataCards: string[] = [];
  public cardsArray: Array<MonitoredCard>;
  public success: boolean = false;
  public totalCards: string = "0/0";
  public cards = Array<MonitoredCard>();
  public compactCards: boolean = false;
  public showAddCard: boolean = false;
  public showMaxError: boolean = false;
  public aliasRequired: boolean = false;
  public currentUser: User;
  public currentUserSubscription: Subscription;
  public get messageService(): MessageService {
    return this._messageService;
  }
  public set messageService(value: MessageService) {
    this._messageService = value;
  }
  addCardForm: FormGroup;
  selectedCard: MonitoredCard = {
    alias: "",
    cardId: -1,
    numberCard: "",
    partnerSuiteId: -1,
    fraudDetected: false,
    lastAnalysisDate: "",
    userProfileId: null,
  };
  loading = false;
  userProfileList: any[] = [];
  selectedProfile: any = null;
  globalLoading = false;

  selectItems: any[] = [];
  defaultImagen : string = this.staticContentUrl + 'img/family-unit/fi-cnsuxl-user-circle.png';

  // TODO: llamar a un servicio y usar esta variable
  familyUnitMaxProfiles = FAMILY_UNIT_MAX_PROFILES;
  constructor(
    public monitoredCardsService: MonitoredCardsService,
    private formBuilder: FormBuilder,
    public userService: UserService,
    private _messageService: MessageService,
    public translate: TranslateService,
    public suiteService: SuiteService,
    private sidebarService: SidebarService,
    public modalService: NgbModal,
    public dashboardService: DashboardUserService,
    private familyUnitService: FamilyUnitService,
    private CDKmodalService: CDKModalService,
  ) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
    monitoredCardsService.maxCardsByUser = Number(
      localStorage.getItem("maxCardsByUser")
    );
    this.cardsArray = new Array<MonitoredCard>();
  }

  ngOnInit() {
    this.globalLoading = true;
    if (!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.loadData();
    }
    this.addCardForm = this.formBuilder.group({
      selectProfile: new FormControl("", Validators.required),
      alias: new FormControl("", [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9!@#-_?¿¡! s$]{4,}$"),
      ]),
      numberCard: new FormControl("", [Validators.pattern("^\\d{16,19}$")]),
    });
    this.watchModalChange();
  }

  private loadServiceInfo() {
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap((res) => (this.data = res)),
        tap(() => this.loadData())
      )
      .subscribe();
  }

  getSelectedCard(id) {
    this.selectedCard = this.monitoredCardsService.cards.find(
      (card) => card.cardId == id
    );
  }

  fakeArray(length: number) {
    length > 0 ? (this.showAddCard = true) : (this.showAddCard = false);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    /*     if (event.keyCode === 32) {
          event.preventDefault();
        } */
  }
  get addCardControls() {
    return this.addCardForm.controls;
  }

  get inputCard() {
    return this.addCardForm.get("numberCard");
  }
  get inputAlias() {
    return this.addCardForm.get("alias");
  }
  async loadData(reload?: boolean) {
    await this.monitoredCardsService.getMonitoredCardsByUser();
    this.getFamilyProfiles(this.currentUser.id);


    this.emitChangesForJumbotrom(reload);
    this.monitoredCardsService.canAddCards =
      Number(localStorage.getItem("maxCardsByUser")) >
      this.monitoredCardsService.cards.length;

    this.fakeArray(
      this.monitoredCardsService.maxCardsByUser -
        this.monitoredCardsService.cards.length
    );
    if (this.monitoredCardsService.canAddCards == true) {
      this.monitoredCardsService.cards.length >= 3
        ? (this.compactCards = true)
        : (this.compactCards = false);
    } else {
      this.monitoredCardsService.cards.length > 3
        ? (this.compactCards = true)
        : (this.compactCards = false);
    }
    this.totalCards = `${this.monitoredCardsService.cards.length}/${this.monitoredCardsService.maxCardsByUser}`;
  }

  emitChangesForJumbotrom(reload?: boolean) {
    if (reload) {
      this.sidebarService.emitReloadJumbotrom({
        serviceCode: this.data.code,
        isActive:
          this.monitoredCardsService.cards &&
          this.monitoredCardsService.cards.length > 0
            ? true
            : false,
      });
    }
  }

  reloadForm() {
    this.addCardForm.reset({
      selectProfile: null,

    });
    console.log(this.addCardForm);
    this.dataCards.length = 0;
    this.dataCards = [];
    this.cardsArray = new Array<MonitoredCard>();
    this.success = false;
    this.showMaxError = false;
  }

  // Services calls
  sendCards() {
    // this.loading = true;
    this.translate
      .get("REQUEST_SERVICE")
      .subscribe((res) => this.messageService.add(res, "ok"));
    const formValues = this.addCardForm.getRawValue();
    this.cardsArray.forEach((element) => {
      element.userProfileId = formValues.selectProfile ? formValues.selectProfile.key : null;
      if (this.userService.selSuiteId)
        element.partnerSuiteId = this.userService.selSuiteId;
      else {
        element.partnerSuiteId = Number(localStorage.getItem("partnerSuiteId"));
      }
    });

    this.monitoredCardsService
      .addMonitoredCard(this.cardsArray)
      .then((result) => {
        this.loading = false;
        if (result) {
          this.messageService.add(
            this.translate.instant("CYBERALARM.CARDS.ADD_FORM.RESULT_OK"),
            "ok"
          );
          this.loadData(true);
          this.dashboardService.getUserDashboard();
          this.success = true;
          this.showMaxError = false;
        } else {
          this.messageService.add(
            this.translate.instant("CYBERALARM.CARDS.ADD_FORM.RESULT_ERROR"),
            "error"
          );
        }
      });
  }

  closeAddModal() {
    this.reloadForm();
    document.getElementById("addModalClose").click();
  }

  addCard(card) {
    if (card != "") {
      if (this.inputAlias.value == "" || this.inputAlias.value == null) {
        this.addCardForm.controls.alias.markAsTouched({ onlySelf: true });
        this.addCardForm.controls.alias.markAsDirty({ onlySelf: true });
        //this.aliasRequired = true
      } else {
        this.showMaxError = false;
        if (this.inputCard.valid && this.dataCards.indexOf(card) == -1) {
          if (
            this.monitoredCardsService.cards.length + this.cardsArray.length <
            Number(localStorage.getItem("maxCardsByUser"))
          ) {
            var tempCard = new MonitoredCard();
            tempCard.alias = this.addCardControls.alias.value;
            tempCard.numberCard = card.trim();
            tempCard.userProfileId = this.selectedProfile
            this.dataCards.push(card);
            this.cardsArray.push(tempCard);
            this.numberCard.nativeElement.value = "";
            this.alias.nativeElement.value = "";
            this.inputAlias.setValue("");
            this.inputCard.setValue("");
            this.inputAlias.markAsUntouched({ onlySelf: true });
            this.inputAlias.markAsPristine({ onlySelf: true });

            if (
              this.monitoredCardsService.cards.length +
                this.cardsArray.length ==
              Number(localStorage.getItem("maxCardsByUser"))
            )
              this.showMaxError = true;
          } else {
            this.showMaxError = true;
          }
        }
      }
    }
  }
  removeCard(card) {
    if (card != "") {
      if (this.dataCards.includes(card.numberCard)) {
        this.dataCards.splice(this.dataCards.indexOf(card.numberCard), 1);
        this.cardsArray.splice(this.cardsArray.indexOf(card.numberCard), 1);
        this.showMaxError = false;
      }
    }
  }

  deleteCard() {
    this.loading = true;
    this.translate
      .get("REQUEST_DELETE_SERVICE")
      .subscribe((res) => this.messageService.add(res, "ok"));
    this.monitoredCardsService
      .deleteMonitoredCard(this.selectedCard.cardId)
      .then((result) => {
        this.loading = false;
        if (result) {
          document.getElementById("closeModalRemove").click();
          this.messageService.add(
            this.translate.instant("CYBERALARM.CARDS.REMOVE_FORM.RESULT_OK"),
            "ok"
          );
          this.loadData(true);
          this.dashboardService.getUserDashboard();
        } else {
          document.getElementById("closeModalRemove").click();
          this.messageService.add(
            this.translate.instant("CYBERALARM.CARDS.REMOVE_FORM.RESULT_ERROR"),
            "error"
          );
        }
      });
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

  getFamilyProfiles(userId: number) {
    if (this.suiteService.isUnitFamily) {
      this.userService.getFamilyProfiles(userId).then(
        (resp: any) => {
          this.globalLoading = false;
          if (resp.length > 0) {

            this.addOwnerByDefault();
            this.userProfileList = this.userProfileList.concat(resp);
            this.formatItemToCustomSelect();
            const selectProfile = this.addCardForm.get('selectProfile');
            selectProfile.setValidators([Validators.required]);
            selectProfile.updateValueAndValidity();

            for (let index = 0; index < this.monitoredCardsService.cards.length; index++) {
              const element: any = this.monitoredCardsService.cards[index];
              if(element.userProfileId > 0) {
                const findElement = resp.find(x => x.userProfileId === element.userProfileId);
                if(findElement)  {
                  element.photo = findElement.photo ? ImageUtils.noCacheImagen(findElement.photo) : null;
                  element.name = findElement.name;
                  element.surname = findElement.surname;
                }
              } else {
                element.name = this.currentUser.name;
                element.surname = this.currentUser.surname;
                if(this.currentUser.profileImage) element.photo = this.currentUser.profileImage;
              }
            }
          } else {
            this.addOwnerByDefault();
            this.formatItemToCustomSelect();
            this.setOwnerDefault();
            this.globalLoading = false;
          }

        },
        (error) => {
          console.warn(error);
        }
      );
    } else {
      this.addOwnerByDefault();
      this.formatItemToCustomSelect();
      this.setOwnerDefault();
      this.globalLoading = false;
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

  setOwnerDefault() {
    for (let index = 0; index < this.monitoredCardsService.cards.length; index++) {
      const element: any = this.monitoredCardsService.cards[index];
      element.name = this.currentUser.name;
      element.surname = this.currentUser.surname;
      if(this.currentUser.profileImage) element.photo = this.currentUser.profileImage;
    }
  }

  onChangeProfile(event) {
    if(event.key === NEW_ITEM) {
      this.addProfile();
      this.addCardForm.get('selectProfile').setValue('');
    }
  }

  addProfile(){
    const config = {
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.CDKmodalService.open(AddProfileComponent, config);
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

import { Component, Input, OnInit } from '@angular/core';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { MonitoredCardsService } from 'src/app/services/monitored-cards.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { ImageUtils } from 'src/app/utils/ImageUtils';
import { environment } from 'src/environments/environment';
import { CitAddCreditCardComponent } from '../cit-add-credit-card/cit-add-credit-card.component';
import { CitDeleteCreditCardComponent } from '../cit-delete-credit-card/cit-delete-credit-card.component';
import { CitWarningComponent } from '../cit-warning/cit-warning.component';

@Component({
  selector: 'app-cit-results',
  templateUrl: './cit-results.component.html',
  styleUrls: ['./cit-results.component.scss']
})
export class CitResultsComponent implements OnInit {
  @Input() data: any;
  protectedCards = 0;
  cardsWithFraud = 0;

  isloading = true;
  compactCards: boolean = false;
  maxCardsByUser: number = 0;
  cards: any[] = [];
  showAddCard = true;
  currentUser: any;
  staticContentUrl = environment.STATIC_CONTENT;
  defaultImagen : string = this.staticContentUrl + 'img/family-unit/fi-cnsuxl-user-circle.png';
  service: any;
  constructor(
    public monitoredCardsService: MonitoredCardsService,
    public suiteService: SuiteService,
    public userService: UserService,
    private CDKmodalService: CDKModalService,
  ) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUserValue;
    this.maxCardsByUser = Number(localStorage.getItem('maxCardsByUser'));
    this.cards = this.data.citInformation;

    this.protectedCards = this.cards.filter(x=>!x.fraudDetected).length;
    this.cardsWithFraud = this.cards.length - this.protectedCards;
    this.service = this.data.service;

    this.monitoredCardsService.canAddCards = this.maxCardsByUser > this.cards.length;
    this.showAddCard = this.maxCardsByUser > this.cards.length;

    if (this.monitoredCardsService.canAddCards == true) {
      this.cards.length >= 3
      ? (this.compactCards = true)
      : (this.compactCards = false);
    } else {
      this.cards.length > 3
      ? (this.compactCards = true)
      : (this.compactCards = false);
    }

    this.getFamilyProfiles(this.currentUser.id);
  }

  getFamilyProfiles(userId: number) {
    if (this.suiteService.isUnitFamily) {
      this.userService.getFamilyProfiles(userId).then(
        (resp: any) => {
          if (resp.length > 0) {
            for (let index = 0; index < this.cards.length; index++) {
              const element = this.cards[index];
              if(element.userProfileId > 0) {
                const findElement = resp.find(x => x.userProfileId === element.userProfileId);
                if(findElement)  {
                  element.photo = findElement.photo ? ImageUtils.noCacheImagen(findElement.photo) : this.defaultImagen;
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
            this.setOwnerDefault();
          }
          this.isloading = false;
        },
        (error) => {
          console.warn(error);
        }
      );

    } else {
      this.setOwnerDefault();
      this.isloading = false;
    }
  }

  addCreditCard() {
    const config = {
      data: {
        cards: [],
        service: this.service,
      },
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.CDKmodalService.open(CitAddCreditCardComponent, config);

  }

  deleteCreditCard(item: any) {
    const config = {
      data: item,
      modalClass: 'ds-modal-sm',
      position: 'top-center',
    };
    this.CDKmodalService.open(CitDeleteCreditCardComponent, config);
  }

  openWarningModal(item:any) {
    const config = {
      data: item,
      modalClass: 'ds-modal-sm',
      position: 'top-center',
    };
    this.CDKmodalService.open(CitWarningComponent, config);
  }

  setOwnerDefault() {
    for (let index = 0; index < this.cards.length; index++) {
      const element = this.cards[index];
      element.name = this.currentUser.name;
      element.surname = this.currentUser.surname;
      if(this.currentUser.profileImage)  element.photo = this.currentUser.profileImage;
    }
  }

}

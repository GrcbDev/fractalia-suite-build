import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { User } from 'src/app/models/user';
import { PartnerService } from 'src/app/services/partner.service';
import { SuiteService } from 'src/app/services/suite.service';
import { UserService } from 'src/app/services/user.service';
import { ImageUtils } from 'src/app/utils/ImageUtils';
import { environment } from 'src/environments/environment';
import { ItpAddEmailComponent } from '../itp-add-email/itp-add-email.component';
import { ItpDeleteItemComponent } from '../itp-delete-item/itp-delete-item.component';
import { ItpWarningModalComponent } from '../itp-warning-modal/itp-warning-modal.component';

@Component({
  selector: 'app-itp-results',
  templateUrl: './itp-results.component.html',
  styleUrls: ['./itp-results.component.scss']
})
export class ItpResultsComponent implements OnInit {
  @Input() data: any;
  maxCardsByUser: number;
  public compactCards: boolean = false;
  showAddCard: boolean = true;
  userProfileList: any[] = [];
  selectedProfile: any = null;
  public currentUser: User;
  public currentUserSubscription: Subscription;
  public staticContentUrl = environment.STATIC_CONTENT;

  isloading = true;
  cards: any;
  service: any;
  constructor(
    private ngbModalService: NgbModal,
    private modalService: CDKModalService,
    public userService: UserService,
    public suiteService: SuiteService,
    private partnerService: PartnerService,
  ) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
  }

  ngOnInit() {
    if (localStorage.getItem('maxIdentitiesByUser'))
      this.maxCardsByUser = Number(localStorage.getItem('maxIdentitiesByUser'));

    /// Validar si se muestra o no el agregar cuenta.
    this.cards = this.data.itpInformation;
    this.service = this.data.service;
    let countCards = this.cards.items.length;

    this.getFamilyProfiles(this.currentUser.id);

    if (this.maxCardsByUser === countCards) {
      this.showAddCard = false;
    } else {
      const e = this.cards.items.length + 1;
      countCards = e;
    }

    this.compactCards = countCards > 3;
  }

  addEmail() {
    const config = {
      data: {
        cards: this.cards.items,
        service: this.service,
      },
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.modalService.open(ItpAddEmailComponent, config);
  }

  deleteEmail(item: any) {
    const config = {
      data: item,
      modalClass: 'ds-modal-sm',
      position: 'top-center',
    };
    this.modalService.open(ItpDeleteItemComponent, config);
  }

  openWarningModal(item: any) {
    const ngbModalOptions: NgbModalOptions = {
      centered: true,
      size: 'sm',
      backdropClass: 'modal-pp',
    };
    const modalRef = this.ngbModalService.open(ItpWarningModalComponent, ngbModalOptions);
    modalRef.componentInstance.data = item;
  }


  getFamilyProfiles(userId: number) {
    if (this.suiteService.isUnitFamily) {
      this.userService.getFamilyProfiles(userId).then(
        (resp: any) => {
          if (resp.length > 0) {
            for (let index = 0; index < this.cards.items.length; index++) {
              const element = this.cards.items[index];
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

  setOwnerDefault() {
    for (let index = 0; index < this.cards.items.length; index++) {
      const element = this.cards.items[index];
      element.name = this.currentUser.name;
      element.surname = this.currentUser.surname;
      if(this.currentUser.profileImage)  element.photo = this.currentUser.profileImage;
    }
  }

}

import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { CDKModalRef } from "src/app/components/cdk-modal/services/cdk-modal-ref";
import { CDKModalService } from "src/app/components/cdk-modal/services/cdk-modal.service";
import { UserService } from "src/app/services/user.service";
import { StringUtils } from "src/app/utils/string-utils";
import { environment } from "src/environments/environment";
import { ItpDeleteItemComponent } from "../../home/identity-theft-protection/itp-delete-item/itp-delete-item.component";
import { ItpWarningModalComponent } from "../../home/identity-theft-protection/itp-warning-modal/itp-warning-modal.component";
import { ServiceTypes } from "../../service/service-one-page/shared/serviceCodes";
import { DeleteCardComponent } from "../delete-card/delete-card.component";
import { WarningCardComponent } from "../warning-card/warning-card.component";

@Component({
  selector: "app-profile-info",
  templateUrl: "./profile-info.component.html",
  styleUrls: ["./profile-info.component.scss"],
})
export class ProfileInfoComponent implements OnInit {
  loading = true;
  profile: any;
  showList = true;
  showGrid = false;
  detail;
  listenDeleteCard: Subscription;
  listenDeleteIdentity: Subscription;
  staticContentUrl = environment.STATIC_CONTENT;

  imageRounded : string = this.staticContentUrl + 'img/family-unit/fi-cnsuxl-user-circle.png';
  serviceList: any[] = [];
  showServiceInTable = true;
  constructor(
    private modalRef: CDKModalRef,
    private userService: UserService,
    private ngbModalService: NgbModal,
    private CDKmodalService: CDKModalService,
    public breakpointObserver: BreakpointObserver
  ) {
    this.checkBreakPoint();
  }

  ngOnInit() {

    this.profile = this.modalRef.config.data;
    if(this.profile.photo) this.imageRounded = this.profile.photo;
    this.loadProfileEditById(this.profile.userProfileId);
    console.log(this.serviceList,'servicelist')

    /*window.addEventListener("resize", e => {
      if(document.body.clientWidth >= 751) {
        this.showServiceInTable = true;
      }
      if(document.body.clientWidth <= 751) {
        this.showServiceInTable = false;
      }
    });*/
  }

  public checkBreakPoint() {

    this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
      this.showServiceInTable = false;
    }
  });

  this.breakpointObserver
  .observe(Breakpoints.Web)
  .subscribe((state: BreakpointState) => {
    if (state.matches) {
      this.showServiceInTable = true;
    }
  });
 }


  closeModal() {
    this.modalRef.close();
  }

  onShowServiceInTable() {
    this.showServiceInTable = true;
  }

  onHideServiceInTable() {
    this.showServiceInTable = false;
  }

  loadProfileEditById(userProfileId: number) {
    this.userService.getUserProfileData(userProfileId).then((res: any) => {
      this.serviceList = res;
      this.loading = false;
    });
  }

  deleteItem(service: any, item: any) {
    if(service.serviceType ===  ServiceTypes.IdentityTheftProtection) { //email
      this.deleteEmail(item)
    }

    if(service.serviceType === ServiceTypes.CreditCardProtection){
      this.deleteCard(item);
    }
  }

  deleteEmail(item: any) {
    const data = {
      identityId: item.itemId,
      identity: item.itemName,
    };
    const config = {
      data,
      modalClass: "ds-modal-sm",
      position: "top-center",
    };
    const modal =  this.CDKmodalService.open(ItpDeleteItemComponent, config);
    modal.afterClosed$.subscribe((deleteEmail: boolean) => {
      if (deleteEmail) {
        this.loadProfileEditById(this.profile.userProfileId);
      }
    });
  }

  deleteCard(item) {
    const ngbModalOptions: NgbModalOptions = {
      centered: true,
      size: "sm",
      backdropClass: "modal-pp",
    };
    const modalRef = this.ngbModalService.open(
      DeleteCardComponent,
      ngbModalOptions
    );
    modalRef.componentInstance.selectedCard = item;
    modalRef.result.then((deleteCard: boolean) => {
      if(deleteCard) {
        this.loadProfileEditById(this.profile.userProfileId);
      }
    });
  }

  openWarningModal(service: any, item: any) {
    if(service.serviceType ===  ServiceTypes.IdentityTheftProtection) {
      this.emailWarning(item);
    }

    if(service.serviceType === ServiceTypes.CreditCardProtection) {
      this.creditCardWarning();
    }
  }

  emailWarning(item: any){
    const modalData = {
      identity: item.itemName,
      identityId: item.itemId,
    }

    const ngbModalOptions: NgbModalOptions = {
      centered: true,
      size: "sm",
      backdropClass: "modal-pp",
    };
    const modalRef = this.ngbModalService.open(
      ItpWarningModalComponent,
      ngbModalOptions
    );
    modalRef.componentInstance.data = modalData;
  }

  creditCardWarning() {
    const ngbModalOptions: NgbModalOptions = {
      centered: true,
      size: "sm",
      backdropClass: "modal-pp",
    };
    this.ngbModalService.open(
      WarningCardComponent,
      ngbModalOptions
    );
  }




}

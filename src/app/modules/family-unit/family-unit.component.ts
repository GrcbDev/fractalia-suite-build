import { DatePipe } from "@angular/common";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { BackupService } from "src/app/services/backup.service";
import { BitdefendermspService } from "src/app/services/bitdefendermsp.service";
import { LocalService } from "src/app/services/local.service";
import { MessageService } from "src/app/services/message.service";
import { PartnerService } from "src/app/services/partner.service";
import { ServicesService } from "src/app/services/services.service";
import { SuiteService } from "src/app/services/suite.service";
import { UserService } from "src/app/services/user.service";
import { environment } from "src/environments/environment";
import { SidebarService } from "../shared/sidebar-menu.service";
import { tap } from 'rxjs/operators'
import { ModalComponent } from "src/app/components/custom/modal/modal.component";
import { ServiceCategoryCodes } from "../service/service-one-page/shared/serviceCategoryCodes";
import { UserProfileData } from "src/app/models/userProfile";

@Component({
  selector: "app-family-unit",
  templateUrl: "./family-unit.component.html",
  styleUrls: ["./family-unit.component.scss"],
})
export class FamilyUnitComponent implements OnInit {
  @Input() data: any;
  filteredServices: any[] = [];
  loading: boolean = true;
  public staticContentUrl = environment.STATIC_CONTENT;
  homeDashboard: any;
  existDigitalSupport = false;
  existCyberSecurity = false;
  existJumbotron = false;
  public slastPreviousAccessDate: string;
  public wizardSkiped = false;
  profileData: any[] = [];
  constructor(
    public router: Router,
    public serviceService: ServicesService,
    public partnerService: PartnerService,
    public suiteService: SuiteService,
    public userService: UserService,
    // public modalService: NgbModal,
    public localService: LocalService,
    private sidebarService: SidebarService,
    public bitdefendermspService: BitdefendermspService,
    public backupService: BackupService,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.slastPreviousAccessDate =
      this.userService.currentUserValue.lastPreviousAccessDate
        .toString()
        .indexOf("Z") >= 0
        ? this.userService.currentUserValue.lastPreviousAccessDate.toString()
        : this.userService.currentUserValue.lastPreviousAccessDate.toString() +
          "Z";
    this.loadUnitFamilyInfo();
    console.log('uunit family load')
  }
  loadData() {
  }

  loadUnitFamilyInfo() {
    const currentUser = this.userService.currentUserValue;
    this.userService.userProfileList = [];

    this.userService
      .getFamilyProfiles(currentUser.id)
      .then((resp: any) => {
            console.log(resp);
            this.loading = false;
            let date = new Date();
            const payload: UserProfileData = {
              userProfileId: 0,
              userId: currentUser.id,
              name: currentUser.name,
              surname: currentUser.surname,
              email: currentUser.email,
              photo: "",
              timezone: "",
              gender: "",
              creationDate: date.toString(),
              creationUser: 0,
              modificationDate: "",
              modificationUser: 0,
              deletedDate: "",
              deleted: false,
            };
            this.userService.userProfileList.push(payload)
            resp.forEach(element => {
              this.userService.userProfileList.push(element)
            })
            console.log('this.userService.userProfileList', this.userService.userProfileList);
            // this.getUserProfileDetail()
      });
  }


  setLocalStorage(key, data) {
    this.localService.setJsonValue(key, data);
  }

  cardOpenModal(name: string, desc: string, icon: string) {
    // const modalRef = this.modalService.open(ModalComponent);
    // modalRef.componentInstance.name = name;
    // modalRef.componentInstance.desc = desc;
    // modalRef.componentInstance.icon = icon;
  }


  getDataFromAppUnit(event: any) {
    console.log('data desde el componente', event)
    this.profileData = event;

  }

  reaload(event) {
    if (event) {
      this.profileData = []
      setTimeout(
        ()=> {
          this.profileData = this.userService.userProfileList
        }, 1000
      )
    }
  }
}

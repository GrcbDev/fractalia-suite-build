import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PartnerService } from "src/app/services/partner.service";
import { UserService } from "src/app/services/user.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-unit-card",
  templateUrl: "./unit-card.component.html",
  styleUrls: ["./unit-card.component.scss"],
})
export class UnitCardComponent implements OnInit {
  public staticContentUrl = environment.STATIC_CONTENT;
  isOpenEditProfile = false;
  isOpenDelete = false;
  isOpenDetail = false;
  @Input() index = 0
  @Input() profile: any = null
  @Output() action = new EventEmitter<any>();
  fullProfiledata: any
  constructor(public modalService: NgbModal, public userService: UserService,  public partnerService: PartnerService,) {}

  ngOnInit(): void {
    this.getUserDetailData();
  }

  openDetail() {
    this.isOpenDetail = true;
  }

  editProfile() {
    this.isOpenEditProfile = true;
  }

  deleteProfile() {
    this.isOpenDelete = true;
  }

  getEditModalAction(event: any) {
    if ( event.action) {
      this.action.emit(event)
    }
   
    setTimeout(() => {
      this.isOpenEditProfile = event.isModalOpen;
    }, 500);
  }
  
  getDeleteModalAction(event: any) {
    if (event.action) {
      this.action.emit(event)
    }
    setTimeout(() => {
      this.isOpenDelete = event.isModalOpen;
    }, 500);
  }

  getDetailModalAction(event: any) {
    setTimeout(() => {
      this.isOpenDetail = event.isModalOpen;
    }, 500);
  }

  getUserDetailData() {
    console.log(this.userService.userProfileDetailList)
    this.userService.userProfileDetailList.forEach((element, index) => {
     if (element.userProfileId === this.profile.userProfileId) {
      this.fullProfiledata = element
     }
    });
  }
}

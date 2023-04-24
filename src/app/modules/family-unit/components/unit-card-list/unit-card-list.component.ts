import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CDKModalService } from "src/app/components/cdk-modal/services/cdk-modal.service";
import { User } from "src/app/models/user";
import { UserProfileData } from "src/app/models/userProfile";
import { UserService } from "src/app/services/user.service";
import { environment } from "src/environments/environment";
import { AddUserProfileComponent } from "../add-user-profile/add-user-profile.component";

@Component({
  selector: "app-unit-card-list",
  templateUrl: "./unit-card-list.component.html",
  styleUrls: ["./unit-card-list.component.scss"],
})
export class UnitCardListComponent implements OnInit {
  isOpenAddProfile = false;
  isOpenResult = false;
  isForAdd = false;
  // @Input() profileData: any[] = [];
  // @Output() action = new EventEmitter<any>();
  selectedProfile: UserProfileData;
  count = 0
  items: any[] = [];
  public staticContentUrl = environment.STATIC_CONTENT;
  public currentUser: User;
  public currentUserSubscription: Subscription;
  constructor(
    public userService: UserService,
    private CDKmodalService: CDKModalService,
  ) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
  }

  ngOnInit(): void {
    this.items = this.userService.userProfileList;
  }

  addProfile() {
    const config = {
      modalClass: 'ds-modal-xs',
      position: 'center',
    };
    this.CDKmodalService.open(AddUserProfileComponent, config)
    // this.modalService.open(AddUserProfileComponent);
    // this.isOpenAddProfile = true;
  }

  // getModalAction(event: any) {
  //   this.selectedProfile = event.profile;
  //   this.isForAdd = event.isForAdd;


  //   setTimeout(() => {
  //     this.isOpenResult = true;
  //     this.isOpenAddProfile = event.isModalOpen;
  //     this.addUserProfile(event.profile)
  //   }, 500);
  // }

  // getResultAction(event: any) {
  //   console.log(event, this.isOpenResult);
  //   setTimeout(() => {
  //     this.isOpenResult = event.isModalOpen;
  //   }, 500);
  // }

  // getUnitAction(event: any) {
  //   console.log(event);

  //   if (event.isFordelete) {
  //     console.log("aqui borra");
  //     this.deleteUserProfile(event.profile);
  //   }

  //   if (event.profile && !event.isFordelete) {
  //     this.selectedProfile = event.profile;
  //     setTimeout(() => {
  //       this.isOpenResult = true;
  //     }, 500);
  //   }
  // }

  getFamilyProfiles(userId: number) {
    // this.userService.userProfileList = []
    // this.userService.getFamilyProfiles(userId).then(
    //   (resp: any) => {
    //    this.userService.userProfileList.push(this.profileData[0]);
    //     resp.forEach((element) => {
    //       this.userService.userProfileList.push(element);
    //     });
    //     this.getUserProfileDetail();
    //   },
    //   (error) => {
    //     console.warn(error);
    //   }
    // );
  }

  getUserProfileDetail() {
    this.userService.userProfileDetailList = [];
    this.userService.userProfileList.forEach((elemnt, idex) => {
      this.userService.getUserProfileData(elemnt.userProfileId).then(
        (resp) => {
          resp[0].userProfileId = elemnt.userProfileId;
          if (
            this.userService.userProfileList.length >
            this.userService.userProfileDetailList.length
          ) {
            this.userService.userProfileDetailList.push(resp[0]);
          }

          // this.action.emit(true)

         // this.profileData =  this.userService.userProfileList;
         this.ngOnInit()
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  // addUserProfile(profile) {
  //   console.log('añadiendo')
  //   this.getFamilyProfiles(this.currentUser.id)
  // }

  deleteUserProfile(profile) {
    // let index = this.profileData.indexOf(profile);
    // this.profileData.splice(index, 1);

    // this.userService.deleteUserProfile(profile).then(
    //   (resp) => {
    //     console.log(resp);
    //   },
    //   (error) => {
    //     console.warn(error);
    //   }
    // );
  }
}

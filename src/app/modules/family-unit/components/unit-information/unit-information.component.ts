import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from "src/app/models/user";
import { SidebarService } from "src/app/modules/shared/sidebar-menu.service";
import { LocalService } from "src/app/services/local.service";
import { PartnerService } from "src/app/services/partner.service";
import { SuiteService } from "src/app/services/suite.service";
import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs";
import { UserProfileData } from "src/app/models/userProfile";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-unit-information",
  templateUrl: "./unit-information.component.html",
  styleUrls: ["./unit-information.component.scss"],
})
export class UnitInformationComponent implements OnInit {
  public staticContentUrl = environment.STATIC_CONTENT;
  public currentUser: User;
  public currentUserSubscription: Subscription;
  profilesAdded = 0;
  @Output() action = new EventEmitter<any>();
  constructor(
    public partnerService: PartnerService,
    public suiteService: SuiteService,
    public userService: UserService,
    public localService: LocalService,
    private sidebarService: SidebarService
  ) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );

    this.profilesAdded = this.userService.userProfileList.length
  }

  ngOnInit(): void {
    this.emitData()
  }

  emitData() {
    this.action.emit(this.userService.userProfileList);
  }
}

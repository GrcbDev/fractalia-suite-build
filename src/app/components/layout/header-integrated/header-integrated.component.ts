import { Component, DoCheck, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Subscription } from "rxjs";
import { filter, tap } from "rxjs/operators";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { PartnerService } from "src/app/services/partner.service";
import { Router } from "@angular/router";
import { SuiteService } from "src/app/services/suite.service";
import { ServicesService } from "src/app/services/services.service";
import { UserNotificationGrouped } from "src/app/models/userNotificationGrouped";
import { AppInstallerService } from "src/app/services/app-installer.service";
import { LocalService } from "src/app/services/local.service";
import { environment } from "src/environments/environment";
import { NotificationService } from "./shared/notification.service";
import { StringUtils } from "src/app/utils/string-utils";
import { NotificationTabs } from "./shared/notifcations-tabs";
import { EmitService } from "src/app/services/emit.service";
import { FraTabsComponent } from "../../fra-tabs/fra-tabs.component";

@Component({
  selector: "app-header-integrated",
  templateUrl: "./header-integrated.component.html",
  styleUrls: ["./header-integrated.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderIntegratedComponent implements OnInit, DoCheck {
  staticContentUrl = environment.STATIC_CONTENT;
  currentUser: User;
  currentUserSubscription: Subscription;
  defaultPhoto = `${this.staticContentUrl}img/profileDefaultMenu.png`;
  userNotificationsGrouped: UserNotificationGrouped[] = [];
  userNotificationsGroupedChilds: UserNotificationGrouped[] = [];
  supportNotificationGrouped: UserNotificationGrouped[] = [];
  notificationUnreaded: boolean = false;
  notificationUnreadedHelper: boolean = false;
  notificationChildsUnreaded: boolean = false;
  supportNotificationUnreaded: boolean = false;
  supportNotificationUnreadedHelper: boolean = false;
  showDownloadText = false;
  showSafariAdvice = false;
  showChromeAdvice = false;
  showDownloadButton = false;
  showNotificationButton = true;
  wizardSkiped = false;
  continueActivateBtn: boolean = false;
  numInten: number = 5;
  numActualInten: number = 0;
  hasGeneralNotificationsUnReaded = false;
  ownNotification = NotificationTabs.OwnNotifications;
  anotherNotification = NotificationTabs.AnotherNotifications;
  supportNotification = NotificationTabs.SupportNotifications;
  isNotificationOpen = false;
  continue = true;
  tabActiveDueNotReadedNotification = NotificationTabs.OwnNotifications;
  totalNotReadedOwnNotifications = 0;
  totalNotReadedAnotherNotifications = 0;
  totalNotReadedSupportNotifications = 0;
  servicesFinalized: number = 0;
  servicesActivated: number = 0;
  wizardIsInvokable: boolean = false;
  countOpenNotifications: number = 0;
  countOpenSupport: number = 0;

  @ViewChild(FraTabsComponent, { static: false }) tabs!: FraTabsComponent;

  constructor(
    public userService: UserService,
    public partnerService: PartnerService,
    public router: Router,
    public suiteService: SuiteService,
    public serviceService: ServicesService,
    public appInstallerService: AppInstallerService,
    private notificationService: NotificationService,
    private localService: LocalService,
    private emitService: EmitService
  ) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
  }

  ngAfterViewInit() {
    this.wizardInvokable();
  }
  async ngOnInit() {
    this.wizardSkiped = localStorage.getItem("skipWizard") == "true";

    if (
      this.currentUser &&
      this.currentUser.roleId === 1 &&
      this.showNotificationButton
    ) {
      this.watchOpenNotification();
      this.watchClickOutsideNotification();
      this.getAndProcessNotifications();
    }

    if (
      this.partnerService.partner.loginType === 2 &&
      this.userService &&
      this.userService.currentUserValue &&
      this.userService.currentUserValue.checkTermsAcceptDate
    ) {
      this.continue = true;
    } else {
      this.continue = false;
    }

    this.emitService.rechargeSidebar.subscribe((bool: boolean) => {
      if (
        this.partnerService.partner.loginType === 2 &&
        this.userService.currentUserValue.checkTermsAcceptDate
      ) {
        this.continue = true;
      } else {
        this.continue = false;
      }
    });
  }

  ngDoCheck(): void {
    this.validateMedia();
  }

  getAndProcessNotifications() {
    this.userService.getUserNotifications().then((result) => {
      const group = this.groupNotifications();
      this.userNotificationsGrouped = StringUtils.sortByProperty(
        group.own,
        "notificationDate",
        true
      );
      this.userNotificationsGroupedChilds = StringUtils.sortByProperty(
        group.another,
        "notificationDate",
        true
      );
      this.supportNotificationGrouped = StringUtils.sortByProperty(
        group.support,
        "notificationDate",
        true
      );
      this.notificationService.showBell =
        this.notificationUnreaded ||
        this.notificationChildsUnreaded ||
        this.supportNotificationUnreaded;
    });
  }


  checkOSOrBrowser (osOrBrowser: 'isWindows' | 'isAndroid' | 'isIos' | 'isChrome' | 'isSafari') {
    return this.appInstallerService[osOrBrowser]()
  }

  ngAfterContentInit() {
    this.appInstallerService.showInstallBox(); // Chrome - edge
    if (!this.appInstallerService.isStandalone()) {
      if (
        (this.appInstallerService.isWindows() ||
          this.appInstallerService.isAndroid()) &&
        this.appInstallerService.isChrome()
      ) {
        this.showDownloadText = true;
        this.showDownloadButton = true;
      }

      if (
        this.appInstallerService.isIos() &&
        this.appInstallerService.isSafari()
      ) {
        // iOs Safari
        this.showSafariAdvice = true;
        this.appInstallerService.showDownloadBox = true;
      }

      if (
        (this.appInstallerService.isWindows() ||
          this.appInstallerService.isAndroid()) &&
        !this.appInstallerService.isChrome()
      ) {
        // Windows/Android and no chrome
        this.appInstallerService.showDownloadBox = true;
        this.showChromeAdvice = true;
      }
    }
  }

  logout() {
    this.userService.logout();
  }

  groupNotifications() {
    let ownNotifications: any[] = [];
    let anotherNotifications: any[] = [];
    let supportNotifications: any[] = [];
    let ownNotiReadad = false;
    let anotherNotiReadad = false;
    let supportNotiReadad = false;

    this.totalNotReadedOwnNotifications = 0;
    this.totalNotReadedAnotherNotifications = 0;
    this.totalNotReadedSupportNotifications = 0;

    if (this.userService.userNotifications != null) {
      this.userService.userNotifications.forEach((element) => {
        const notificationDate = StringUtils.convertDateLatinFormat(
          element.notificationDate
        );
        if (element.userId == this.currentUser.id && !element.type) {
          if (!element.readed) {
            ownNotiReadad = true;
            this.totalNotReadedOwnNotifications++;
          }
          const found = ownNotifications.some(
            (ung) => ung.notificationDate === notificationDate
          );
          if (!found) {
            const ung = new UserNotificationGrouped();
            ung.notificationDate = notificationDate;
            ung.notifications.push(element);
            ownNotifications.push(ung);
          } else {
            ownNotifications
              .find((ung) => ung.notificationDate === notificationDate)
              .notifications.push(element);
          }
        }

        if (element.userId !== this.currentUser.id && !element.type) {
          if (!element.readed) {
            anotherNotiReadad = true;
            this.totalNotReadedAnotherNotifications++;
          }
          const found = anotherNotifications.some(
            (ung) => ung.notificationDate === notificationDate
          );
          if (!found) {
            const ung = new UserNotificationGrouped();
            ung.notificationDate = notificationDate;
            ung.notifications.push(element);
            anotherNotifications.push(ung);
          } else {
            anotherNotifications
              .find((ung) => ung.notificationDate === notificationDate)
              .notifications.push(element);
          }
        }

        if (element.userId == this.currentUser.id && element.type == "NS") {
          if (!element.readed) {
            this.totalNotReadedSupportNotifications++;
            supportNotiReadad = true;
          }
          element.description = element.description;
          element.parseLinks = element.links ? JSON.parse(element.links) : null;
          element.parseFiles = element.attachedFilesNames
            ? element.attachedFilesNames.replace(/[\[\]]/g, "").split(",")
            : "";
          element.parseURLFiles = element.attachedFiles
            ? element.attachedFiles.replace(/[\[\]]/g, "").split(",")
            : "";
          const found = supportNotifications.some(
            (ung) => ung.notificationDate === notificationDate
          );
          if (!found) {
            const ung = new UserNotificationGrouped();
            ung.notificationDate = notificationDate;
            ung.notifications.push(element);
            supportNotifications.push(ung);
          } else {
            supportNotifications
              .find((ung) => ung.notificationDate === notificationDate)
              .notifications.push(element);
          }
        }
      });
    }

    const tabWithMaxNotificacion = Math.max(
      this.totalNotReadedOwnNotifications,
      /* this.totalNotReadedAnotherNotifications, */
      this.totalNotReadedSupportNotifications
    );

    if (tabWithMaxNotificacion == this.totalNotReadedOwnNotifications) {
      this.tabActiveDueNotReadedNotification =
        NotificationTabs.OwnNotifications;
    }/*  else if (
      tabWithMaxNotificacion == this.totalNotReadedAnotherNotifications
    ) {
      this.tabActiveDueNotReadedNotification =
        NotificationTabs.AnotherNotifications;
    } */ else if (
      tabWithMaxNotificacion == this.totalNotReadedSupportNotifications
    ) {
      this.tabActiveDueNotReadedNotification =
        NotificationTabs.SupportNotifications;
    }

    this.resetTabsAndActive(this.tabActiveDueNotReadedNotification);

    this.notificationUnreaded = ownNotiReadad;
    this.notificationUnreadedHelper = ownNotiReadad;
    this.calculatedTotalNotification();
    this.notificationChildsUnreaded = anotherNotiReadad;
    this.supportNotificationUnreaded = supportNotiReadad;
    this.supportNotificationUnreadedHelper = supportNotiReadad;
    return {
      own: ownNotifications,
      another: anotherNotifications,
      support: supportNotifications,
    };
  }

  checkProfile() {
    if (
      this.currentUser.isAdminUserId &&
      this.currentUser.companyUser.maxLicense > 1
    ) {
      this.router.navigate(["/user-list"]);
      return;
    } else {
      this.router.navigate(["/profile"]);
      return;
    }
  }

  changeTab(event, status: boolean) {
    switch (event.id) {
      case NotificationTabs.OwnNotifications:
        if(this.countOpenNotifications > 0) {
          this.readNotifications(status, false);
        } else {
          this.readNotifications(status, true);
        }
        break;

      case NotificationTabs.AnotherNotifications:
        this.readChildsNotifications();
        break;

      case NotificationTabs.SupportNotifications:
        if(this.countOpenSupport > 0) {
          this.readSupportNotification(status, false);
        } else {
          this.readSupportNotification(status, true);
        }
        break;

      default:
        break;
    }
  }

  deleteAllByTab(event) {
    switch (event.id) {
      case NotificationTabs.OwnNotifications:
        this.hideNotifications();
        break;

      case NotificationTabs.AnotherNotifications:
        this.hideChildsNotifications();
        break;

      case NotificationTabs.SupportNotifications:
        // this.readSupportNotification();
        break;

      default:
        break;
    }
  }

  updateGeneralNotification() {
    this.notificationService.showBell =
      this.notificationUnreaded ||
      this.notificationChildsUnreaded ||
      this.supportNotificationUnreaded;
  }

  calculatedTotalNotification() {
    const totalNotReaded =
      this.totalNotReadedOwnNotifications +
      this.totalNotReadedAnotherNotifications +
      this.totalNotReadedSupportNotifications;
    this.notificationService.totalNotReadedNotifications =
      totalNotReaded > 99 ? "+" + totalNotReaded : totalNotReaded.toString();
  }

  readNotifications(status: boolean, recentOpen: boolean) {
    if (this.notificationUnreadedHelper) {
      this.userService.readUserNotifications().then(() => {
        if(status) {
          if(recentOpen) {
            this.notificationUnreadedHelper = false;
          } else {
            this.userNotificationsGrouped.forEach((userNotif) => {
              userNotif.notifications.forEach((notif) => {
                notif.readed = true;
              });
            });
          }
        }

        if(recentOpen) {
          this.countOpenNotifications++;
        } else if(!recentOpen) {
          this.countOpenNotifications = 0;
        }

        if(this.countOpenNotifications > 1) {
          this.notificationUnreadedHelper = false;
        } else {
          this.notificationUnreadedHelper = true;
        }

        this.totalNotReadedOwnNotifications = 0;
        this.calculatedTotalNotification();
        this.notificationUnreaded = false;
        this.updateGeneralNotification();
      });
    }
  }
  readSupportNotification(status: boolean, recentOpen: boolean) {
    if (this.supportNotificationUnreadedHelper) {
      this.userService.readSupportNotifications().then(() => {
        if(status) {
          if(recentOpen) {
            this.supportNotificationUnreadedHelper = false;
          } else {
            this.supportNotificationGrouped.forEach((userNotif) => {
              userNotif.notifications.forEach((notif) => {
                notif.readed = true;
              });
            });
          }
        }

        if(recentOpen) {
          this.countOpenSupport = 1;
        } else {
          this.countOpenSupport = 0;
        }

        if(this.countOpenSupport > 1) {
          this.supportNotificationUnreadedHelper = false;
        } else {
          this.supportNotificationUnreadedHelper = true;
        }

        this.totalNotReadedSupportNotifications = 0;
        this.calculatedTotalNotification();
        this.supportNotificationUnreaded = false;
        this.updateGeneralNotification();
      });
    }
  }
  readChildsNotifications() {
    if (this.notificationChildsUnreaded) {
      this.userService.readUserChildsNotifications().then(() => {
        this.userNotificationsGroupedChilds.forEach((userNotif) => {
          userNotif.notifications.forEach((notif) => {
            notif.readed = true;
          });
        });
        this.totalNotReadedAnotherNotifications = 0;
        this.calculatedTotalNotification();
        this.notificationChildsUnreaded = false;
        this.updateGeneralNotification();
      });
    }
  }

  hideNotifications() {
    this.userService.hideUserNotifications().then((result) => {
      this.userNotificationsGrouped = [];
    });
  }
  hideChildsNotifications() {
    this.userService.hideUserChildsNotifications().then((result) => {
      this.userNotificationsGroupedChilds = [];
    });
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

  setLocalStorage(key, data) {
    this.localService.setJsonValue(key, data);
  }

  goToWizard() {
    this.router.navigate(["/auto-activation"]);
  }

  toogleNotification() {
    if(!this.isNotificationOpen) {
      if(this.tabActiveDueNotReadedNotification == NotificationTabs.OwnNotifications) {
        if(this.countOpenNotifications > 0) {
          this.readNotifications(false, false);
        } else {
          this.readNotifications(false, true);
        }
      } else if(this.tabActiveDueNotReadedNotification == NotificationTabs.SupportNotifications) {
        if(this.countOpenSupport > 0) {
          this.readSupportNotification(false, false);
        } else {
          this.readSupportNotification(false, true);
        }
      }
    }
    this.notificationService.toogleNotification();
  }

  watchOpenNotification() {
    this.notificationService.openNotification$
      .pipe(
        filter((res) => !!res),
        tap(({ toogle }) => {
          this.isNotificationOpen = toogle;
          if (toogle) {
            if (this.tabActiveDueNotReadedNotification) {
              /* this.changeTab({ id: NotificationTabs.OwnNotifications }); */
              this.changeTab({id:this.tabActiveDueNotReadedNotification }, false);
            }
          } else {
            this.getAndProcessNotifications();
          }
        })
      )
      .subscribe();
  }

  resetTabsAndActive(index) {
    this.tabs.resetTabs(index);
  }

  watchClickOutsideNotification() {
    window.addEventListener("click", (e: any) => {
      const iconMobile = document.getElementById("noti-icon-mobile");
      const buttonNoti = document.getElementById("button-noti");
      const notificationDiv = document.getElementById("notification");
      if (notificationDiv || buttonNoti || iconMobile) {
        if (
          !(
            notificationDiv.contains(e.target) ||
            iconMobile.contains(e.target) ||
            buttonNoti.contains(e.target)
          )
        ) {
          this.notificationService.closeNotification();
        }
      }
    });
  }

  validateMedia() {
    if (!window.matchMedia("(display-mode: standalone)").matches) {
      this.showDownloadButton = true;
    } else if (window.matchMedia("(display-mode: standalone)").matches) {
      this.showDownloadButton = false;
    }
  }

  wizardInvokable() {
    this.userService.getActivationServices().then(result => {
      var services = result as any;
      if (services.length > 0) {
        this.servicesActivated = services.length;
        services.forEach(element => {
          if (element.finalized) this.servicesFinalized++;
        });
        if (this.servicesActivated != this.servicesFinalized) this.wizardIsInvokable = true;
      }
    });
  }
}

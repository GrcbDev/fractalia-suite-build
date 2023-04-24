import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import Chart from "chart.js";
import { ChartType } from "chart.js";
import { Label, MultiDataSet } from "ng2-charts";
import { Subscription } from "rxjs";
import { catchError, filter, tap } from "rxjs/operators";
import { CDKModalService } from "src/app/components/cdk-modal/services/cdk-modal.service";
import { NEW_ITEM } from "src/app/components/dropdown/shared/dropdown-conts";
import { User } from "src/app/models/user";
import { AddProfileComponent } from "src/app/modules/poc/add-profile/add-profile.component";
import { FamilyUnitService } from "src/app/modules/poc/shared/family-unit.service";
import { FAMILY_UNIT_MAX_PROFILES } from "src/app/modules/poc/shared/famiy-unit-const";
import { BitdefendermspService } from "src/app/services/bitdefendermsp.service";
import { MessageService } from "src/app/services/message.service";
import { SuiteService } from "src/app/services/suite.service";
import { UserService } from "src/app/services/user.service";
import { StringUtils } from "src/app/utils/string-utils";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-bms-results",
  templateUrl: "./bms-results.component.html",
  styleUrls: ["./bms-results.component.scss"],
})
export class BmsResultsComponent implements OnInit {
  @Input() data: any;
  isFullPage = true;
  widthCalculated: any;
  service: any;
  isloading = true;
  public deviceTotal: number;
  public deviceInstall: number;
  public chartData = [];
  public doughnutChartData: MultiDataSet = [this.chartData];
  public chartType: ChartType = "doughnut";
  public chartLabels: Label[] = [];
  public doughnutColors: any[] = [{ backgroundColor: ["#1bb77a", "#b1b1b1"] }];
  public barData: number[] = [];
  public barChartLabels = [];
  public barChartType = "bar";
  public barChartLegend = false;
  public barChartData = [];
  public barChartOptions;
  public currentUser: User;
  public currentUserSubscription: Subscription;
  userProfileList: any[] = [];
  selectedProfile: any = null;
  staticContentUrl = environment.STATIC_CONTENT;
  defaultImagen: string =
    this.staticContentUrl + "img/family-unit/fi-cnsuxl-user-circle.png";
  selectItems: any[] = [];
  tempDevice: any;
  // TODO: llamar a un servicio y usar esta variable
  familyUnitMaxProfiles = FAMILY_UNIT_MAX_PROFILES;

  constructor(
    public bitdefendermspService: BitdefendermspService,
    public modalService: NgbModal,
    private router: Router,
    private translate: TranslateService,
    public userService: UserService,
    public suiteService: SuiteService,
    public messageService: MessageService,
    private CDKmodalService: CDKModalService,
    private familyUnitService: FamilyUnitService
  ) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );

    Chart.defaults.global.tooltips.enabled = false;
    Chart.defaults.global.animation.duration = 2000;
    Chart.defaults.global.legend.display = false;

    this.barChartOptions = {
      responsive: true,
      scales: {
        xAxes: [
          {
            ticks: {
              callback: function (value) {
                if (value.length > 10)
                  return value.substr(0, 10) + "..."; //truncate
                else return value;
              },
            },
          },
        ],
        yAxes: [{}],
      },
      tooltips: {
        enabled: true,
        mode: "label",
        callbacks: {
          title: function (tooltipItems, data) {
            var idx = tooltipItems[0].index;

            if (tooltipItems[0].value == 0.5) {
              tooltipItems[0].value = 0;
            }

            var days = translate.instant("CYBERSECURITY.PROTECTION.DAY");
            tooltipItems[0].value += " " + days;
            return data.labels[idx];
          },
        },
      },
    };
  }

  ngOnInit() {
    this.service = this.data.service;
    this.isFullPage = this.data && this.data.isFullPage ? true : false;
    this.widthCalculated =
      ((this.bitdefendermspService.nDeviceInstall -
        this.bitdefendermspService.devicesRisk.length) *
        100) /
      this.bitdefendermspService.nDeviceInstall;

    this.getFamilyProfiles(this.currentUser.id, false);
    this.proccessBMSStepInformation();
    this.watchModalChange();
  }

  proccessBMSStepInformation() {
    const bitdenderResponse = this.data.stepInformation.data;
    const aSubsId = bitdenderResponse.subscriptions[0].productId.split("-");
    const nDevicexProducto = aSubsId
      .find((x) => x.includes("device"))
      .replace("device", "");
    this.deviceTotal = +nDevicexProducto;
    this.deviceInstall = bitdenderResponse.devices.length;
    this.chartData.push(this.deviceInstall);
    this.chartData.push(this.deviceTotal - this.deviceInstall);
    for (let device of bitdenderResponse.devices) {
      if (device.taskScan != null) {
        this.barData.push(device.taskScan.days);
      } else this.barData.push(0);
      this.barChartLabels.push(device.displayName);
    }
    this.barChartData = [{ data: this.barData }];

    this.bitdefendermspService.bitdefenderResponse.devices.map((item) => {
      item.lastScanFormatted = StringUtils.convertDateWithHour(
        new Date(item.lastScan)
      );
      item.icon = this.getIconByType(item);
    });

    this.isloading = false;
  }

  getIconByType(item) {
    let icon = "";
    if (item.type == "computer") {
      if (item.os == "windows") {
        icon = "icon-computer-windows";
      }

      if (item.os == "mac") {
        icon = "icon-computer-mac";
      }
    }
    if (item.type == "phone") {
      if (item.os == "android") {
        icon = "icon-phone-android";
      }

      if (item.os == "ios") {
        icon = "icon-phone-ios";
      }
    }

    return icon;
  }

  loadService() {
    this.router.navigate(["/service/BMS"]);
  }

  loadBitdefenderPopup() {
    window.open(this.bitdefendermspService.access_central_url, "_blank");
    //window.open("https://central.bitdefender.com/dashboard", "_blank");
  }

  onChangeProfile(value: any, item: any) {
    console.log({ value, item });
    this.tempDevice = item;
    if (value.key === NEW_ITEM) {
      this.addProfile();
      item.selectedProfile = "";
    } else {
      const deviceId: number = item.deviceId;
      const userProfileId: number = value.key;
      this.bitdefendermspService
        .asignProfileUserToLicence(deviceId, userProfileId)
        .pipe(
          tap((res: any) => {
            this.messageService.add(
              this.translate.instant("CYBERSCORING.UPDATE_SUCCESS"),
              "ok"
            );
          }),
          catchError(async () => {
            this.messageService.add(
              this.translate.instant(
                "NAVEGACIONSEGURA.CONFIGURACION_RESULT_KO"
              ),
              "error"
            );
          })
        )
        .subscribe();
    }
  }

  getFamilyProfiles(userId: number, status: boolean) {
    if (this.suiteService.isUnitFamily) {
      this.userService.getFamilyProfiles(userId).then(
        (resp: any) => {
          if (resp.length > 0) {
            this.addOwnerByDefault();
            this.userProfileList = this.userProfileList.concat(resp);
            this.formatItemToCustomSelect(status);
          } else {
            this.addOwnerByDefault();
            this.formatItemToCustomSelect(status);
          }
        },
        (error) => {
          console.warn(error);
        }
      );
    } else {
      this.addOwnerByDefault();
      this.formatItemToCustomSelect(status);
    }
  }

  addOwnerByDefault() {
    this.userProfileList = [
      {
        userProfileId: 0,
        userId: this.currentUser.id,
        name: this.currentUser.name,
        surname: this.currentUser.surname,
        email: this.currentUser.email,
        isOwnerAccount: true,
        photo: this.currentUser.profileImage
          ? this.currentUser.profileImage
          : this.defaultImagen,
      },
    ];
  }

  formatItemToCustomSelect(status: boolean) {
    const userProfileItems = this.userProfileList.map((x) => {
      const item = {
        key: x.userProfileId,
        value: x.name + " " + x.surname,
        imagenPath: x.photo ? x.photo : this.defaultImagen,
      };
      return item;
    });
    if (this.userProfileList.length <= this.familyUnitMaxProfiles) {
      const addNewItem = [
        {
          key: NEW_ITEM,
          value: this.translate.instant("FAMILY_UNIT.CREATE_NEW_PROFILE"),
          imagenPath: "",
          iconName: "icon-plus",
        },
      ];
      this.selectItems = userProfileItems.concat(addNewItem);
    } else {
      this.selectItems = userProfileItems;
    }

    if (status) {
      const last = this.selectItems[this.selectItems.length - 2];
      this.onChangeProfile(last, this.tempDevice);
      this.bitdefendermspService.emitBmsServiceReload((change) => {
        console.log({ change });
      });
    }
  }

  addProfile() {
    const config = {
      modalClass: "ds-modal-sm",
      position: "center",
    };
    this.CDKmodalService.open(AddProfileComponent, config);
  }

  watchModalChange() {
    this.familyUnitService.familyUnitChange$
      .pipe(
        filter((data) => !!data),
        tap(() => this.cleanData()),
        tap(() => this.getFamilyProfiles(this.currentUser.id, true))
      )
      .subscribe();
  }

  cleanData() {
    this.selectItems = [];
    this.userProfileList = [];
  }
}

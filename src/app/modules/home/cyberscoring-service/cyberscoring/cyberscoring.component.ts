import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Router } from "@angular/router";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { ChartType } from "chart.js";
import { DatePipe } from "@angular/common";
import { CyberscoringCompanyInfo } from "src/app/models/cyberscoring/cyberscoringCompanyInfo";
import { CyberscoringSector } from "src/app/models/cyberscoring/cyberscoringSector";
import { CyberscoringService } from "src/app/services/cyberscoring.service";
import { MessageService } from "src/app/services/message.service";
import { UserService } from "src/app/services/user.service";
import { PartnerService } from "src/app/services/partner.service";
import { UserValidator } from "src/app/validators/user.validator";
import { DomainValidator } from "src/app/validators/domain.validator";
import { LocalService } from "src/app/services/local.service";
import { ModalComponent } from "../../../../components/custom/modal/modal.component";
import { environment } from "src/environments/environment";
import { FamilyUser } from "src/app/models/familyUser";
import { CbyFreemiumAlertComponent } from "../../../../components/cby-freemium-alert/cby-freemium-alert.component";
import { forkJoin } from "rxjs";
import { map, tap } from "rxjs/operators";
import { SidebarService } from "src/app/modules/shared/sidebar-menu.service";
import { CYBERSCORING } from "../cyberscoring-constants";

declare var $: any;

@Component({
  selector: "app-cyberscoring",
  templateUrl: "./cyberscoring.component.html",
  styleUrls: ["./cyberscoring.component.scss"],
  // encapsulation: ViewEncapsulation.None
})
export class CyberscoringComponent implements OnInit {
  @Input() serviceCard?: boolean = false;
  @Input() showHeaderCard?: boolean = true;
  @Input() data: any;
  @ViewChild("email") email: ElementRef;
  @ViewChild("domain") domain: ElementRef;
  public staticContentUrl = environment.STATIC_CONTENT;
  public sectors: CyberscoringSector[] = [];
  public loading = false;
  public globalLoading = false;
  public dataC: CyberscoringCompanyInfo = new CyberscoringCompanyInfo();
  public showMessage: boolean = false;
  public errorDomain: boolean = false;
  public errorBusinessName: boolean = false;
  public errorCnae: boolean = false;
  public errorNoDomain: boolean = false;
  public message: string = "";
  public readonlyFields = false;
  public success: boolean = false;
  public hasHistory: boolean = false;
  public analyzing: boolean = false;
  public sector: string;
  public lastDate: Date;
  public nextDate: Date;
  public isMinDate: boolean = false;
  public terms = false;
  public canValidate = false;
  public lastReport: string;
  public editModal: boolean = false;
  public cantEdit: boolean = false;
  public freemiun: boolean = true;
  public freeModal: boolean = false;
  public poor = CYBERSCORING.poor;
  public fair = CYBERSCORING.fair;
  public good = CYBERSCORING.good;
  public gaugeType = CYBERSCORING.gaugeType;
  public lastScore = CYBERSCORING.lastScore;
  public gaugeMax = CYBERSCORING.gaugeMax;
  public gaugeMin = CYBERSCORING.gaugeMin;
  public gaugeMessage = CYBERSCORING.gaugeMessage;
  public thresholdConfig = CYBERSCORING.thresholdConfig;
  public markerConfig = CYBERSCORING.markerConfig;
  public chartOptions = CYBERSCORING.chartOptions;
  public gaugeLabel = "";

  // Historical chart
  public chartDataset: Array<any> = [];
  public chartType: ChartType = "line";
  public chartColor: any[] = CYBERSCORING.chartColor;

  public chartLabels: Array<any> = [];

  constructor(
    public cyberscoringService: CyberscoringService,
    public router: Router,
    public userService: UserService,
    public modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public translate: TranslateService,
    public messageService: MessageService,
    public partnerService: PartnerService,
    private sidebarService: SidebarService,
    public datepipe: DatePipe,
    private localService: LocalService
  ) {}

  ngOnInit() {
    this.globalLoading = true;
    if (!this.data.longDesc) {
      this.loadServiceInfo();
    } else {
      this.processCyberscoringService(this.data);
      this.loadServices(true);
    }
  }

  private loadServiceInfo() {
    const identityToken = this.userService.currentUserValue;
    this.sidebarService
      .getServiceInfo(this.data.id, identityToken.partnerId)
      .pipe(
        tap((res) => (this.data = res)),
        tap((res) => this.processCyberscoringService(res)),
        tap(() => this.loadServices(true))
      )
      .subscribe();
  }

  processCyberscoringService(service) {
    this.cyberscoringService.serviceId = service.id;
    this.cyberscoringService.serviceName = service.name;
    this.cyberscoringService.serviceIcon = service.icon;
    this.cyberscoringService.serviceDesc = service.desc;
    this.cyberscoringService.longDesc = service.longDesc;
  }

  getCompanyData() {
    this.cyberscoringService.getCompany().then((res) => {
      this.globalLoading = false;
      if (res) {
        this.dataC = res;
        this.dataC.product == 0
          ? (this.freemiun = true)
          : (this.freemiun = false);
        (this.dataC.status == 1 || this.dataC.nextStatus == 1)? this.analyzing = true : this.analyzing = false;
        this.analyzing = true;
        console.log("fremium", this.freemiun);
         if (this.dataC.historicalRating.length > 0) {
           this.hasHistory = true;
           this.sector = this.sectors.find(x => x.id === this.dataC.cnae).name
           var data: any[] = [];
           data = this.dataC.historicalRating.map(e => {
             return this.datepipe.transform(new Date(e.endDate), 'yyyy-MM-dd');
           })
           this.chartLabels = data;
           this.nextDate = new Date(this.dataC.nextAnalysisDate);
           this.isMinDate = '0001-01-01T00:00:00' === this.dataC.nextAnalysisDate;
           this.lastDate = new Date(this.dataC.historicalRating[this.dataC.historicalRating.length - 1].endDate);
           this.lastReport = this.dataC.reports[this.dataC.reports.length - 1].pdfLink;
           data = this.dataC.historicalRating.map(e => {
             return e.score;
           })
           this.chartDataset.push({ data: data, label: "Rating" })

           this.lastScore = this.dataC.historicalRating[this.dataC.historicalRating.length - 1].score;

           this.translate.get('HELLO').toPromise().then((e) => {
             switch (true) {
               case this.lastScore >= 900:
                 // this.gaugeLabel = this.translate.instant('CYBERSCORING.EXCELLENT');
                 this.gaugeLabel = this.translate.instant('CYBERSCORING.GOOD');
                 this.gaugeMessage = 3;
                 break;
               case this.lastScore >= 700:
                 // this.gaugeLabel = this.translate.instant('CYBERSCORING.GOOD');
                 this.gaugeLabel = this.translate.instant('CYBERSCORING.FAIR');
                 this.gaugeMessage = 2
                 break;
               case this.lastScore >= 600:
                 // this.gaugeLabel = this.translate.instant('CYBERSCORING.FAIR');
                 this.gaugeLabel = this.translate.instant('CYBERSCORING.POOR');
                 this.gaugeMessage = 1
                 break;
               case this.lastScore >= 300:
                 this.gaugeLabel = this.translate.instant('CYBERSCORING.POOR');
                 this.gaugeMessage = 1
                 break;
               default:
                 // this.gaugeLabel = this.translate.instant('CYBERSCORING.FIRE');
                 this.gaugeLabel = this.translate.instant('CYBERSCORING.POOR');
                 this.gaugeMessage = 1
                 break;
             }
           }
           )
         }
        this.readonlyFields = this.dataC.alreadyCreated;
      }
    });
  }

  async createCompany() {
    this.showMessage = false;
    this.loading = true;
    // validating all domains
    this.dataC.domains = this.dataC.domains;
    this.dataC.domains.forEach((element) => {
      if (!DomainValidator.checkIsValidDomain(element)) {
        this.message = this.translate.instant("CYBERSCORING.DOMAIN_ERROR");
        this.showMessage = true;
        this.loading = false;
      }
    });
    if (this.showMessage) return;
    (await this.cyberscoringService.createCompany(this.dataC)).subscribe(
      (response) => {
        if (response.status === 200) {
          this.messageService.add(
            this.translate.instant("CYBERSCORING.CREATECOMPANY_OK"),
            "ok"
          );
          this.loading = false;
          this.readonlyFields = true;
          this.success = true;
          this.getCompanyData();
        } else {
          this.messageService.add(
            this.translate.instant("CYBERSCORING.CREATECOMPANY_ERROR"),
            "error"
          );
          this.message = this.translate.instant(
            "CYBERSCORING.CREATECOMPANY_ERROR"
          );
          this.showMessage = true;
          this.loading = false;
        }
      }
    );
  }

  editMode() {
    this.cantEdit = false;
    if (this.dataC.nextStatus == 0) {
      this.readonlyFields = false;
      this.freeModal = false;
      this.editModal = true;
      this.toggleValidate();
      // this.dataC.businessName = this.dataC.nextBusinessName;
      // this.dataC.cnae = this.dataC.nextCnae;
      // this.dataC.domains = this.dataC.nextDomains;
    } else {
      this.cantEdit = true;
    }
  }

  toggleFreeModal() {
    this.freeModal = true;
  }

  toggleValidate() {
    this.canValidate = !this.canValidate;
    this.success = false;
  }

  goToReports() {
    document.getElementById("header-list").scrollIntoView();
  }

  goCyberscoring() {
    this.editModal = false;
    if (this.freemiun) {
      this.modalService.open(CbyFreemiumAlertComponent);
    } else {
      this.router.navigate(["service/CYB"]);
    }
  }

  onFocusOutBusiness(event: any) {
    const val = event.target.value;
    val == ""
      ? (this.errorBusinessName = true)
      : (this.errorBusinessName = false);
  }

  onFocusOutCnae(event: any) {
    const val = event.target.value;
    val == -1 ? (this.errorCnae = true) : (this.errorCnae = false);
  }

  onFocusOutDomain(edit: boolean) {
    if (edit == true) {
      if (this.dataC.nextDomains.length == 0) {
        this.errorNoDomain = true;
      } else {
        this.errorNoDomain = false;
      }
    } else {
      if (this.dataC.domains.length == 0) {
        this.errorNoDomain = true;
      } else {
        this.errorNoDomain = false;
      }
    }
  }

  AddEmail(email) {
    this.message = "";
    this.showMessage = false;
    if (email != "") {
      if (
        UserValidator.validEmail(email) != null &&
        this.dataC.emails.indexOf(email) == -1
      ) {
        this.dataC.emails.push(email);
        this.email.nativeElement.value = "";
      } else {
        this.message = this.translate.instant("CYBERSCORING.EMAIL_ERROR");
        this.showMessage = true;
      }
    }
  }

  AddDomain(domain) {
    this.message = "";
    this.errorDomain = false;
    this.errorNoDomain = false;
    if (domain != "") {
      if (
        DomainValidator.checkIsValidDomain(domain) &&
        this.dataC.domains.indexOf(domain) == -1
      ) {
        this.editModal
          ? this.dataC.nextDomains.push(domain)
          : this.dataC.domains.push(domain);
        this.domain.nativeElement.value = "";
      } else {
        this.message = this.translate.instant("CYBERSCORING.DOMAIN_ERROR");
        this.errorDomain = true;
      }
    }
  }

  DeleteDomain(domain) {
    this.message = "";
    this.showMessage = false;
    if (domain != "") {
      if (this.editModal) {
        if (this.dataC.nextDomains.includes(domain))
          this.dataC.nextDomains.splice(
            this.dataC.nextDomains.indexOf(domain),
            1
          );
      } else {
        if (this.dataC.domains.includes(domain))
          this.dataC.domains.splice(this.dataC.domains.indexOf(domain), 1);
      }
    }
  }

  DeleteEmail(email) {
    this.message = "";
    this.showMessage = false;
    if (email != "") {
      if (this.dataC.emails.includes(email))
        this.dataC.emails.splice(this.dataC.emails.indexOf(email));
    }
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

  async getLastReport(id?) {
    if (this.freemiun) {
      this.modalService.open(CbyFreemiumAlertComponent);
    } else {
      if (id) {
        await this.userService.getCyberScoringPdf(id.toString()).then((res) => {
          this.downloadPdfFile(res, "Report");
        });
      } else {
        await this.userService
          .getCyberScoringPdf(this.dataC.cyberscoringId.toString())
          .then((res) => {
            this.downloadPdfFile(res, "Report");
          });
      }
    }
  }

  checkTerms(e: any) {
    this.terms = e.target.checked;
  }

  downloadPdfFile(bas64Data: string, fileName: string) {
    const buffer = this.base64ToArrayBuffer(bas64Data);
    const blob = new Blob([buffer], { type: "application/pdf" });
    const nav = window.navigator as any;
    if (nav.msSaveOrOpenBlob) {
      return nav.msSaveOrOpenBlob(blob, `${fileName}.pdf`);
    }
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    window.open(link.href, "_blank");
  }

  base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      const ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    return bytes;
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }

  private loadServices(reload?: boolean) {
    if (
      reload ||
      !this.cyberscoringService.companyData ||
      !(
        this.cyberscoringService.sectors &&
        this.cyberscoringService.sectors.length
      )
    ) {
      forkJoin([
        this.cyberscoringService.getSectors2(),
        this.cyberscoringService.getCompany2(),
      ])
        .pipe(
          tap((res: any) => this.processSectorInformation(res[0])),
          tap((res: any) => this.processCompanyInformation(res[1])),
          tap(() => (this.globalLoading = false))
        )
        .subscribe();
    } else {
      this.sectors = this.cyberscoringService.getSectorProcessedData();
      this.dataC = this.cyberscoringService.getCompanyData();
      this.proccessCompanyInformation();
      this.globalLoading = false;
    }
  }

  processSectorInformation(data: any) {
    const formatData = this.cyberscoringService.processSectorInformation(data);
    this.cyberscoringService.setSectors(formatData);
    this.sectors = formatData;
  }

  processCompanyInformation(data: any) {
    this.cyberscoringService.setCompanyData(data);
    this.dataC = data;
    this.proccessCompanyInformation();
  }

  // loadSectors(reload?: boolean) {
  //   if(reload || !(this.cyberscoringService.sectors && this.cyberscoringService.sectors.length)) {
  //     this.cyberscoringService.getSectors2()
  //     .pipe(
  //       map((data: any) => this.cyberscoringService.processSectorInformation(data)),
  //       tap((formatData) => this.cyberscoringService.setSectors(formatData)),
  //       tap((formatData) => this.sectors = formatData),
  //       tap(() => this.loadCompanyData())
  //     ).subscribe();
  //   } else {
  //     this.sectors = this.cyberscoringService.getSectorProcessedData();
  //   }
  // }

  // loadCompanyData(reload?: boolean) {
  //   if(reload || !this.cyberscoringService.companyData) {
  //     this.cyberscoringService.getCompany2()
  //     .pipe(
  //       tap((data:any) => this.cyberscoringService.setCompanyData(data)),
  //       tap((data) => this.dataC = data),
  //       tap(() => this.proccessCompanyInformation()),
  //       tap(() => this.globalLoading = false)
  //     ).subscribe();
  //   } else {
  //     this.dataC = this.cyberscoringService.getCompanyData();
  //     this.proccessCompanyInformation()
  //   }
  // }

  async proccessCompanyInformation() {
    this.dataC.product == 0 ? (this.freemiun = true) : (this.freemiun = false);
    this.dataC.status == 1 || this.dataC.nextStatus == 1
      ? (this.analyzing = true)
      : (this.analyzing = false);
    console.log("fremium", this.freemiun);
    if (this.dataC.historicalRating.length > 0) {
      this.hasHistory = true;
      this.sector = this.sectors.find((x) => x.id === this.dataC.cnae).name;
      var data: any[] = [];
      data = this.dataC.historicalRating.map((e) => {
        return this.datepipe.transform(new Date(e.endDate), "yyyy-MM-dd");
      });
      this.chartLabels = data;
      this.nextDate = new Date(this.dataC.nextAnalysisDate);
      this.isMinDate = "0001-01-01T00:00:00" === this.dataC.nextAnalysisDate;
      this.lastDate = new Date(
        this.dataC.historicalRating[
          this.dataC.historicalRating.length - 1
        ].endDate
      );
      this.lastReport =
        this.dataC.reports[this.dataC.reports.length - 1].pdfLink;
      data = this.dataC.historicalRating.map((e) => {
        return e.score;
      });
      this.chartDataset.push({ data: data, label: "Rating" });

      this.lastScore =
        this.dataC.historicalRating[
          this.dataC.historicalRating.length - 1
        ].score;

      await this.translate
        .get("HELLO")
        .toPromise()
        .then((e) => {
          switch (true) {
            case this.lastScore >= 900:
              // this.gaugeLabel = this.translate.instant('CYBERSCORING.EXCELLENT');
              this.gaugeLabel = this.translate.instant("CYBERSCORING.GOOD");
              this.gaugeMessage = 3;
              break;
            case this.lastScore >= 700:
              // this.gaugeLabel = this.translate.instant('CYBERSCORING.GOOD');
              this.gaugeLabel = this.translate.instant("CYBERSCORING.FAIR");
              this.gaugeMessage = 2;
              break;
            case this.lastScore >= 600:
              // this.gaugeLabel = this.translate.instant('CYBERSCORING.FAIR');
              this.gaugeLabel = this.translate.instant("CYBERSCORING.POOR");
              this.gaugeMessage = 1;
              break;
            case this.lastScore >= 300:
              this.gaugeLabel = this.translate.instant("CYBERSCORING.POOR");
              this.gaugeMessage = 1;
              break;
            default:
              // this.gaugeLabel = this.translate.instant('CYBERSCORING.FIRE');
              this.gaugeLabel = this.translate.instant("CYBERSCORING.POOR");
              this.gaugeMessage = 1;
              break;
          }
        });
    }
  }

  // private processSectorInformation(info: any) {
  //   info.forEach(element => {
  //     this.sectors.push(element);
  //     this.sectors.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  //   });
  // }

  // private processCompanyInformation(info: any) {

  // }
}

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
import { UserService } from "src/app/services/user.service";
import { environment } from "src/environments/environment";

export interface UserServices {
  serviceId: number;
  name: string;
  icon: string;
  isActivatable: boolean;
  monitoredCard: MonitoredCard[];
  monitoredIdentity: MonitoredIdentity[];
  bitdefenderMsp: BitdefenderMS;
  bitdefenderMsm: BitdefenderMS;
}

export interface BitdefenderMS {
  externalAppBitdefenderMspId: number;
  userId: number;
  partnerSuiteId: number;
  subscriberId: string;
  data: string;
  deleted: Date;
  createdDate: Date;
  serviceTypeId: number;
  isUsed: boolean;
}

export interface MonitoredCard {
  cardId: number;
  numberCard: string;
  alias: string;
  partnerSuiteId: number;
  fraudDetected: boolean;
  lastAnalysisDate: string;
  userProfileId: number;
}

export interface MonitoredIdentity {
  domain: string;
  name: string;
  description: string;
  detectionDate: string;
}

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent implements OnInit {
  public staticContentUrl = environment.STATIC_CONTENT;
  @Output() action = new EventEmitter<any>();
  @Input() profile: any = null;
  @Input() detail: UserServices = null;
  basicModalCloseResult: string = "";
  showList = true;
  showGrid = false;
  @ViewChild("basicModal") basicModal: ElementRef;
  constructor(public modalService: NgbModal, public userService: UserService) {}

  ngOnInit(): void {
    console.log(this.profile, this.detail, JSON.parse(this.detail.bitdefenderMsp.data))
  }

  ngAfterViewInit() {
    this.openBasicModal(this.basicModal);
  }

  openBasicModal(content: any) {
    console.log(TemplateRef);
    this.modalService
      .open(content, { centered: true })
      .result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result;
        this.continue();
      })
      .catch((res) => {
        this.continue();
      });
  }

  continue() {
    this.action.emit(true);
  }

  close() {
    this.action.emit({
      isModalOpen: false,
      action: null,
    });
    this.modalService.dismissAll();
  }
}

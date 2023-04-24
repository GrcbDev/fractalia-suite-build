import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { DashboardUserService } from "src/app/services/dashboard-user.service";
import { MessageService } from "src/app/services/message.service";
import { MonitoredCardsService } from "src/app/services/monitored-cards.service";
import { FamilyUnitService } from "../shared/family-unit.service";

@Component({
  selector: "app-delete-card",
  templateUrl: "./delete-card.component.html",
  styleUrls: ["./delete-card.component.scss"],
})
export class DeleteCardComponent implements OnInit {
  @Input() selectedCard;
  loading = false;
  constructor(
    public activeModal: NgbActiveModal,
    public monitoredCardsService: MonitoredCardsService,
    public translate: TranslateService,
    private _messageService: MessageService,
    public dashboardService: DashboardUserService,
    private familyUnitService: FamilyUnitService
  ) {}

  ngOnInit(): void {
    console.log(this.selectedCard);
  }

  public get messageService(): MessageService {
    return this._messageService;
  }
  public set messageService(value: MessageService) {
    this._messageService = value;
  }

  deleteCard() {
    this.loading = true;
    this.translate
      .get("REQUEST_DELETE_SERVICE")
      .subscribe((res) => this.messageService.add(res, "ok"));


    this.monitoredCardsService
      .deleteMonitoredCard(this.selectedCard.itemId)
      .then((result) => {
        this.loading = false;
        if (result) {
          this.messageService.add(
            this.translate.instant("CYBERALARM.CARDS.REMOVE_FORM.RESULT_OK"),
            "ok"
          );
          this.closeModal(true);
          this.familyUnitService.emitDeleteCard(true);
          this.dashboardService.getUserDashboard();
        } else {
          this.messageService.add(
            this.translate.instant("CYBERALARM.CARDS.REMOVE_FORM.RESULT_ERROR"),
            "error"
          );
          this.closeModal();
        }
      });
  }

  closeModal(value?: boolean) {
    this.activeModal.close(value);
  }
}

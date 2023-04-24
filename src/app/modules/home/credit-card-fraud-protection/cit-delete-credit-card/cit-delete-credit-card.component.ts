import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { FamilyUnitService } from 'src/app/modules/poc/shared/family-unit.service';
import { MessageService } from 'src/app/services/message.service';
import { MonitoredCardsService } from 'src/app/services/monitored-cards.service';

@Component({
  selector: 'app-cit-delete-credit-card',
  templateUrl: './cit-delete-credit-card.component.html',
  styleUrls: ['./cit-delete-credit-card.component.scss']
})
export class CitDeleteCreditCardComponent implements OnInit {
  loading = false;
  creditCardSelected: any = {};
  constructor(
    private modalRef: CDKModalRef,
    private translate: TranslateService,
    private messageService: MessageService,
    private monitoredCardsService: MonitoredCardsService,
    private familyUnitService: FamilyUnitService,
  ) { }

  ngOnInit() {
    this.creditCardSelected = this.modalRef.config.data;
  }

  closeModal(deleteCard?: boolean) {
    this.modalRef.close(deleteCard);
  }

  deleteCreditCard() {
    this.loading = true;
    this.translate.get('REQUEST_DELETE_SERVICE').subscribe(res => this.messageService.add(res, "ok"));
    this.monitoredCardsService.deleteMonitoredCard(this.creditCardSelected.cardId).then(
      result => {
        this.loading = false;
        if (result) {
          this.messageService.add(this.translate.instant("CYBERALARM.CARDS.REMOVE_FORM.RESULT_OK"),"ok");
          this.monitoredCardsService.emitReload(true);
          this.familyUnitService.emitDeleteIdentity(true)
          this.closeModal(true);
        }
        else{
          this.messageService.add(this.translate.instant("CYBERALARM.CARDS.REMOVE_FORM.RESULT_ERROR"),"error");
        }
      })
  }

}

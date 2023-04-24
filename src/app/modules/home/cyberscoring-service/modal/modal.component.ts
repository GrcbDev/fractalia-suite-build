import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-modal-cyberscoring",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Output() toggleValidateEvent = new EventEmitter<any>();
  @Output() createCompanyEvent = new EventEmitter<any>();
  @Output() onFocusOutBusinessEvent = new EventEmitter<any>();
  @Output() onFocusOutCnaeEvent = new EventEmitter<any>();
  @Output() addDomainEvent = new EventEmitter<any>();
  @Output() onFocusOutDomainEvent = new EventEmitter<any>();
  @Output() deleteDomainEvent = new EventEmitter<any>();
  @Output() checkTermsEvent = new EventEmitter<any>();
  @Input() success: any;
  @Input() editModal: any;
  @Input() cantEdit: any;
  @Input() freeModal: any;
  @Input() dataC: any;
  @Input() staticContentUrl: any;
  @Input() readonlyFields: any;
  @Input() showMessage: any;
  @Input() message: any;
  @Input() sectors: any;
  @Input() errorBusinessName: any;
  @Input() errorCnae: any;
  @Input() errorNoDomain: any;
  @Input() errorDomain: any;
  @Input() confirm: any;
  @Input() terms: any;
  @Input() loading: any;
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    console.log(this.dataC);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log({changes});

    if(changes.freeModal.currentValue) {
      this.editModal = false;
    }

    if(changes.editModal.currentValue) {
      this.freeModal = false;
    }
  }

  toggleValidate() {
    this.toggleValidateEvent.emit(true);
  }

  createCompany() {
    this.createCompanyEvent.emit(true);
  }

  onFocusOutBusiness(event: any) {
    this.onFocusOutBusinessEvent.emit(event);
  }

  onFocusOutCnae(event: any) {
    this.onFocusOutCnaeEvent.emit(event);
  }

  AddDomain(value: any) {
    this.addDomainEvent.emit(value);
  }

  onFocusOutDomain(value: any) {
    this.onFocusOutDomainEvent.emit(value);
  }

  DeleteDomain(domain: any) {
    this.deleteDomainEvent.emit(domain);
  }

  checkTerms(event: any) {
    this.checkTermsEvent.emit(event);
  }
}

import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-warning-card",
  templateUrl: "./warning-card.component.html",
  styleUrls: ["./warning-card.component.scss"],
})
export class WarningCardComponent implements OnInit {
  @Input() selectedCard;
  loading = false;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  closeModal() {
    this.activeModal.close();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-cyberscoring-results",
  templateUrl: "./cyberscoring-results.component.html",
  styleUrls: [
    "./cyberscoring-results.component.scss",
    "../cyberscoring/cyberscoring.component.scss",
  ],
})
export class CyberscoringResultsComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  @Output() goCyberScoringEvent = new EventEmitter<any>();
  @Output() toggleFreeModalEvent = new EventEmitter<any>();
  @Input() gaugeType;
  @Input() lastScore;
  @Input() gaugeMax;
  @Input() gaugeMin;
  @Input() thresholdConfig;
  @Input() markerConfig;
  @Input() gaugeMessage;
  @Input() gaugeLabel;
  @Input() good;
  @Input() fair;
  @Input() poor;
  @Input() freemiun;
  @Input() isMinDate;
  @Input() nextDate;
  @Input() dataC: any;
  @Input() sector;
  @Input() lastDate;
  @Input() chartType;
  @Input() chartLabels;
  @Input() chartDataset;
  @Input() chartOptions;
  @Input() staticContentUrl;
  @Input() serviceCard?: boolean = false;
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  getLastReport() {
    this.next.emit(true);
  }

  goCyberscoring() {
    this.goCyberScoringEvent.emit(true);
  }

  toggleFreeModal() {
    this.toggleFreeModalEvent.emit(true);
  }
}

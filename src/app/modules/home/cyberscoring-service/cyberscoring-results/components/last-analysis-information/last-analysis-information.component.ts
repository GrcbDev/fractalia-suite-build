import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-last-analysis-information',
  templateUrl: './last-analysis-information.component.html',
  styleUrls: ['./last-analysis-information.component.scss', "../../../cyberscoring/cyberscoring.component.scss"]
})
export class LastAnalysisInformationComponent implements OnInit {
  @Input() dataC;
  @Input() lastDate;
  @Input() sector;
  @Output() next = new EventEmitter<any>();
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  getLastReport() {
    this.next.emit(true);
  }

}

import { Component, Input, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-report-history-table',
  templateUrl: './report-history-table.component.html',
  styleUrls: ['./report-history-table.component.scss',  "../../../cyberscoring/cyberscoring.component.scss"]
})
export class ReportHistoryTableComponent implements OnInit {
  @Input() dataC;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}

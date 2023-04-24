import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-next-analysis',
  templateUrl: './next-analysis.component.html',
  styleUrls: ['./next-analysis.component.scss', "../../../cyberscoring/cyberscoring.component.scss"]
})
export class NextAnalysisComponent implements OnInit {
  @Input() freemiun
  @Input() isMinDate
  @Input() nextDate
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}

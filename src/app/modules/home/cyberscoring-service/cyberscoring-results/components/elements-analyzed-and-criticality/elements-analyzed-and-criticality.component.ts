import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-elements-analyzed-and-criticality',
  templateUrl: './elements-analyzed-and-criticality.component.html',
  styleUrls: ['./elements-analyzed-and-criticality.component.scss', "../../../cyberscoring/cyberscoring.component.scss"]
})
export class ElementsAnalyzedAndCriticalityComponent implements OnInit {
  @Input() dataC;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}

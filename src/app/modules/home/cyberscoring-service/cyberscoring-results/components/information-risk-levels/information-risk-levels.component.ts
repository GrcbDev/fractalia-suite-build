import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-information-risk-levels',
  templateUrl: './information-risk-levels.component.html',
  styleUrls: ['./information-risk-levels.component.scss', "../../../cyberscoring/cyberscoring.component.scss"]
})
export class InformationRiskLevelsComponent implements OnInit {
  @Input() good
  @Input() fair
  @Input() poor
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}

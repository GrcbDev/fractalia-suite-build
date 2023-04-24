import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-graphic-subtitle',
  templateUrl: './graphic-subtitle.component.html',
  styleUrls: ['./graphic-subtitle.component.scss', "../../../cyberscoring/cyberscoring.component.scss"]
})
export class GraphicSubtitleComponent implements OnInit {
  @Input() gaugeMessage;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}

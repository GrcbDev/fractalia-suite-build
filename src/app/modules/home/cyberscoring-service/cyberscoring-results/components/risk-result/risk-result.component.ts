import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-risk-result',
  templateUrl: './risk-result.component.html',
  styleUrls: ['./risk-result.component.scss', "../../../cyberscoring/cyberscoring.component.scss"]
})
export class RiskResultComponent implements OnInit {
  @Input() gaugeMessage;
  @Input() gaugeLabel;
  constructor() { }

  ngOnInit(): void {
  }

}

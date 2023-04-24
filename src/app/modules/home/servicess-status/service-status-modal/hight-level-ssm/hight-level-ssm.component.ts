import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hight-level-ssm',
  templateUrl: './hight-level-ssm.component.html',
  styleUrls: ['./hight-level-ssm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HightLevelSsmComponent implements OnInit {
  @Input() data: any;
  public allServicesActivated = false;
  constructor() { }

  ngOnInit() {
    this.allServicesActivated = this.data;
  }


}

import { Component, Input, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() dataC: any;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}

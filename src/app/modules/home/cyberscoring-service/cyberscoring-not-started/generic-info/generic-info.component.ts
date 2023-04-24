import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-generic-info',
  templateUrl: './generic-info.component.html',
  styleUrls: ['./generic-info.component.scss']
})
export class GenericInfoComponent implements OnInit {
  @Output() next = new EventEmitter<any>();

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  toggleValidate() {
    this.next.emit(true);
  }

}

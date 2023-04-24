import { Component, Input, OnInit } from '@angular/core';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { ItpAddEmailComponent } from '../itp-add-email/itp-add-email.component';

@Component({
  selector: 'app-itp-not-started',
  templateUrl: './itp-not-started.component.html',
  styleUrls: ['./itp-not-started.component.scss']
})
export class ItpNotStartedComponent implements OnInit {
  @Input() data: any;
  service: any;
  constructor(
    private modalService: CDKModalService,
  ) { }

  ngOnInit() {
    this.service = this.data.service;
  }

  addEmail() {
    const config = {
      data: {
        cards: [],
        service: this.service,
      },
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.modalService.open(ItpAddEmailComponent, config);
  }

}

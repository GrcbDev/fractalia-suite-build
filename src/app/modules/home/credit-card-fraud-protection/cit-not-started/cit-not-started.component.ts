import { Component, Input, OnInit } from '@angular/core';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { CitAddCreditCardComponent } from '../cit-add-credit-card/cit-add-credit-card.component';

@Component({
  selector: 'app-cit-not-started',
  templateUrl: './cit-not-started.component.html',
  styleUrls: ['./cit-not-started.component.scss']
})
export class CitNotStartedComponent implements OnInit {

  @Input() data: any;
  service: any;
  constructor(
    private CDKmodalService: CDKModalService,
  ) { }

  ngOnInit() {
    this.service = this.data.service;
  }


  addCreditCard(){
    const config = {
      data: {
        cards: [],
        service: this.service,
      },
      modalClass: 'ds-modal-sm',
      position: 'center',
    };
    this.CDKmodalService.open(CitAddCreditCardComponent, config);
  }

}

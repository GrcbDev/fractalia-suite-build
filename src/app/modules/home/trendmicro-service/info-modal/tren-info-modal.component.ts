import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tren-info-modal',
  templateUrl: './tren-info-modal.component.html',
  styleUrls: ['./tren-info-modal.component.scss']
})
export class TrenInfoModalComponent implements OnInit {

  public staticContentUrl = environment.STATIC_CONTENT;


  constructor(
    private modalRef: CDKModalRef
  ) { }

  ngOnInit() {
  }


  closeModal(){
    this.modalRef.close();
  }


}

import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cac-help-modal',
  templateUrl: './cac-help-modal.component.html',
  styleUrls: ['./cac-help-modal.component.scss']
})
export class CacHelpModalComponent implements OnInit {

  public staticContentUrl = environment.STATIC_CONTENT;
  step: number = 1;

  constructor(
    private modalRef: CDKModalRef
  ) { }

  ngOnInit() {
  }


  closeModal(){
    this.modalRef.close();
  }

  nextStep(){
    this.step += 1
  }

  previousStep(){
    this.step -= 1
  }
}

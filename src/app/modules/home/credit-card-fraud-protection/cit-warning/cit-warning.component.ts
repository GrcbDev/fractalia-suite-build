import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';

@Component({
  selector: 'app-cit-warning',
  templateUrl: './cit-warning.component.html',
  styleUrls: ['./cit-warning.component.scss']
})
export class CitWarningComponent implements OnInit {

  constructor(private modalRef: CDKModalRef,) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalRef.close();
  }

}

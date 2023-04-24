import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from './services/cdk-modal-ref';

@Component({
  selector: 'app-cdk-modal',
  templateUrl: './cdk-modal.component.html',
  styleUrls: ['./cdk-modal.component.scss'],
})
export class CDKModalComponent implements OnInit {
  component!: ComponentType<any>;

  constructor(private modalRef: CDKModalRef) {}

  ngOnInit(): void {
    this.component = this.modalRef.component;
  }
}

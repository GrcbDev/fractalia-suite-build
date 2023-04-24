import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileData } from 'src/app/models/userProfile';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Output() action = new EventEmitter<any>();
  basicModalCloseResult: string = '';
  @ViewChild('basicModal') basicModal: ElementRef;
  @Input() isForAdd = true
  @Input() profile: UserProfileData;
  constructor(  public modalService: NgbModal) { }

  ngOnInit(): void {
    console.log('dentro del componente', this.isForAdd)
  }

  ngAfterViewInit() {
    this.openBasicModal(this.basicModal)
  }

  openBasicModal(content: any) {
    console.log(TemplateRef)
    this.modalService.open(content, {centered: true}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
      this.continue()
    }).catch((res) => {
      this.continue()
    });
  }

  continue() {
    this.action.emit(true);
  }

  close() {
    this.action.emit({
      isModalOpen: false,
      action: null,
    });
    this.modalService.dismissAll()
  }

}

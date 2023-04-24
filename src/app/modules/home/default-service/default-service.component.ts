import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
// import { StringUtils } from 'src/app/utils/string-utils';

@Component({
  selector: 'app-default-service',
  templateUrl: './default-service.component.html',
  styleUrls: ['./default-service.component.scss']
})
export class DefaultServiceComponent implements OnInit {
  @Input() data: any;
  constructor(
    public modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.navigate(['home']);
  }

  open(name: string, desc: string, icon: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.desc = desc;
    modalRef.componentInstance.icon = icon;
  }


}

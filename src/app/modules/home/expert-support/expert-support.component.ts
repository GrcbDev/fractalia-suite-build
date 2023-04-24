import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CallComponent } from 'src/app/components/call/call.component';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { CallmebackComponent } from 'src/app/components/callmeback/callmeback.component';

@Component({
  selector: 'app-expert-support',
  templateUrl: './expert-support.component.html',
  styleUrls: ['./expert-support.component.scss']
})
export class ExpertSupportComponent implements OnInit {
  @Input() data: any;
  imgSource: string = '';
  showImagen = false;
  constructor(
    public modalService: NgbModal,
    private CDKmodalService: CDKModalService,
  ) { }

  ngOnInit() {
    this.imgSource = this.data.supportImage ? this.data.supportImage : "https://devstatic.app.onlineassist.me/suite/img/expert-support/exp-support-web.png";
    this.updateCssImagen();
  }

  ngAfterViewInit(): void {
    window.addEventListener("resize", e => {
      this.updateCssImagen();
    });
  }

  openCallModal() {
    const config = {
      modalClass: 'ds-modal-xs',
      position: 'center',
    };
    this.CDKmodalService.open(CallComponent, config);
  }

  abrirCMB() {
    this.modalService.open(CallmebackComponent);
  }

  updateCssImagen() {
    if(document.body.clientWidth >= 1250) {
      document.documentElement.style.setProperty('--bg-img', 'unset');
    }
    if(document.body.clientWidth < 1250) {
      document.documentElement.style.setProperty('--bg-img', `url(${this.imgSource})`);
    }
  }
}

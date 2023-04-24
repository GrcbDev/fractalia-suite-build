import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PartnerService } from 'src/app/services/partner.service';
import { LanguageService } from 'src/app/services/language.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CallComponent } from '../../call/call.component';
import { CallmebackComponent } from '../../callmeback/callmeback.component';
import { CDKModalService } from '../../cdk-modal/services/cdk-modal.service';


//TEST

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(public userService: UserService,
    public partnerService: PartnerService,
    private modalService: NgbModal,
    private CDKmodalService: CDKModalService,
    public languageService: LanguageService) { }
    public termLink : string = "Términos y condiciones"

    ngOnInit() {
      if(this.languageService.lan==="es-ES"){
        this.termLink = "Términos y condiciones";
      }
      else if(this.languageService.lan==="pt-BR"){
        this.termLink = "Termos e condições do serviço";
      }
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
}

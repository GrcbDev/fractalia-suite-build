import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { PartnerService } from 'src/app/services/partner.service';
import { LoginLayout } from '../../shared/LoginLayout';
import { DefaultEapComponent } from './default-eap/default-eap.component';
import { ResidentialEapComponent } from './residential-eap/residential-eap.component';

@Component({
  selector: 'app-email-and-password',
  templateUrl: './email-and-password.component.html',
  styleUrls: ['./email-and-password.component.scss'],
})
export class EmailAndPasswordComponent implements OnInit {
  @ViewChild(RenderComponentDirective, { static: false } as any)
  directiveContainer: RenderComponentDirective;
  constructor(
    private dynamicRenderComponentService: DynamicRenderComponentService,
    public partnerService: PartnerService,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loadComponentByBussinesStrategy(this.partnerService.layout)
  }

  ngOnDestroy() {
  }

  loadComponentByBussinesStrategy(loginLayout?: LoginLayout) {
    switch (loginLayout as any) {
      case LoginLayout.Default:
        this.renderDefaultLayout();
        break;
      case LoginLayout.Residential:
        this.renderResidentialLayout();
        break;
      default:
        this.renderDefaultLayout();
        break;
    }
  }

  renderDefaultLayout() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DefaultEapComponent);
  }

  renderResidentialLayout(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ResidentialEapComponent);
  }


}

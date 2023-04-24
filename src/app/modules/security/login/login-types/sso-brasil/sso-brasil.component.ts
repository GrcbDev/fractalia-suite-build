import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { PartnerService } from 'src/app/services/partner.service';
import { LoginLayout } from '../../shared/LoginLayout';
import { DefaultSsoBrasilComponent } from './default-ssobrasil/default-ssobrasil.component';
import { ResidentialSsoBrasilComponent } from './residential-ssobrasil/residential-ssobrasil.component';

@Component({
  selector: 'app-sso-brasil',
  templateUrl: './sso-brasil.component.html',
  styleUrls: ['./sso-brasil.component.scss']
})
export class SsoBrasilComponent implements OnInit {
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
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DefaultSsoBrasilComponent);
  }

  renderResidentialLayout(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ResidentialSsoBrasilComponent);
  }
}

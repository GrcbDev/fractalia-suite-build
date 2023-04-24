import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { PartnerService } from 'src/app/services/partner.service';
import { LoginLayout } from '../../shared/LoginLayout';
import { DefaultAmaComponent } from './default-ama/default-ama.component';
import { ResidentialAmaComponent } from './residential-ama/residential-ama.component';

@Component({
  selector: 'app-ama-insurance',
  templateUrl: './ama-insurance.component.html',
  styleUrls: ['./ama-insurance.component.scss']
})
export class AmaInsuranceComponent implements OnInit {
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
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DefaultAmaComponent);
  }

  renderResidentialLayout(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ResidentialAmaComponent);
  }

}

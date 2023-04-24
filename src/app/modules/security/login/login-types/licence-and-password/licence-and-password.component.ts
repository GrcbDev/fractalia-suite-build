import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { PartnerService } from 'src/app/services/partner.service';
import { LoginLayout } from '../../shared/LoginLayout';
import { DefaultLapComponent } from './default-lap/default-lap.component';
import { ResidentialLapComponent } from './residential-lap/residential-lap.component';

@Component({
  selector: 'app-licence-and-password',
  templateUrl: './licence-and-password.component.html',
  styleUrls: ['./licence-and-password.component.scss']
})
export class LicenceAndPasswordComponent implements OnInit {
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
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, DefaultLapComponent);
  }

  renderResidentialLayout(){
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, ResidentialLapComponent);
  }

}

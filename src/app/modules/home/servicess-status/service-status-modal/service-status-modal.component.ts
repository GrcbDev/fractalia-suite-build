import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { HightLevelSsmComponent } from './hight-level-ssm/hight-level-ssm.component';
import { LowLevelSsmComponent } from './low-level-ssm/low-level-ssm.component';
import { MediumLevelSsmComponent } from './medium-level-ssm/medium-level-ssm.component';
import { ServiceStatusLevel } from './shared/service-status-level';

@Component({
  selector: 'app-service-status-modal',
  templateUrl: './service-status-modal.component.html',
  styleUrls: ['./service-status-modal.component.scss']
})
export class ServiceStatusModalComponent implements OnInit {
  serviceStatusData: any;
  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;
  constructor(
    private dynamicRenderComponentService: DynamicRenderComponentService,
    private modalRef: CDKModalRef,
  ) { }

  ngOnInit() {
    this.serviceStatusData = this.modalRef.config.data;
    this.loadComponentByBussinessStrategy(this.serviceStatusData.levelProtection);
  }

  loadComponentByBussinessStrategy(level: ServiceStatusLevel) {
    if(!level) {
      this.renderDefaultLevel()
    }
    switch (level) {
      case ServiceStatusLevel.HightLevel:
        this.renderHightLevel(this.serviceStatusData.allProtected);
        break;
      case ServiceStatusLevel.MediumLevel:
        this.renderMediumLevel();
        break;
      case ServiceStatusLevel.LowLevel:
        this.renderLowLevel();
        break;
      default:
        this.renderDefaultLevel();
        break;
    }
  }

  renderDefaultLevel() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, LowLevelSsmComponent);
  }

  renderHightLevel(allProtected: boolean) {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, HightLevelSsmComponent, allProtected);
  }

  renderMediumLevel() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, MediumLevelSsmComponent);
  }

  renderLowLevel() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, LowLevelSsmComponent);
  }

  closeModal() {
    this.modalRef.close();
  }

}

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DynamicRenderComponentService } from 'src/app/dynamic-render/dynamic-render-component.service';
import { RenderComponentDirective } from 'src/app/dynamic-render/render-component.directive';
import { CyberscoringInProcessComponent } from './cyberscoring-in-process/cyberscoring-in-process.component';
import { CyberscoringNotStartedComponent } from './cyberscoring-not-started/cyberscoring-not-started.component';
import { CyberscoringResultsComponent } from './cyberscoring-results/cyberscoring-results.component';
import { CyberScoringSteps } from './shared/cyberscoring-steps.enum';

@Component({
  selector: 'app-cyberscoring-service',
  templateUrl: './cyberscoring-service.component.html',
  styleUrls: ['./cyberscoring-service.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CyberscoringServiceComponent implements OnInit {

  @ViewChild(RenderComponentDirective, { static: true } as any)
  directiveContainer: RenderComponentDirective;
  constructor(
    private dynamicRenderComponentService: DynamicRenderComponentService
  ) { }

  ngOnInit() {
    this.loadComponentByBussinesStrategy(CyberScoringSteps.CyberScoringNotStarted);
  }

  loadComponentByBussinesStrategy(step: CyberScoringSteps) {
    if (!step) {
      this.renderCyberscoringNotStarted();
      return;
    }

    switch (step) {
      case CyberScoringSteps.CyberScoringNotStarted:
        this.renderCyberscoringNotStarted();
        break;
      case CyberScoringSteps.CyberScoringInProcess:
       this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CyberscoringInProcessComponent);
        break;
      case CyberScoringSteps.CyberScoringResults:
        this.renderCyberscoringWithResults()
        break;
    }
  }

  renderCyberscoringNotStarted() {
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CyberscoringNotStartedComponent);
  }

  renderCyberscoringWithResults() {
    const data = { };
    this.dynamicRenderComponentService.loadComponent(this.directiveContainer, CyberscoringResultsComponent, data);
  }


}

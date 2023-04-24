import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxGaugeModule } from "ngx-gauge";

import { CyberscoringServiceComponent } from "./cyberscoring-service.component";
import { TranslateModule } from "@ngx-translate/core";
import { SliderModule } from "src/app/components/slider/slider.module";
import { DynamicRenderComponentModule } from "src/app/dynamic-render/dynamic-render-component.module";
import { NzSpinnerModule } from "src/app/components/nz-spinner/nz-spinner.module";
import {CyberscoringInProcessComponent} from "./cyberscoring-in-process/cyberscoring-in-process.component";
import {CyberscoringNotStartedComponent} from "./cyberscoring-not-started/cyberscoring-not-started.component";
import {CyberscoringResultsComponent} from "./cyberscoring-results/cyberscoring-results.component";
import {GenericInfoComponent} from "./cyberscoring-not-started/generic-info/generic-info.component";
import {InfoComponent} from "./cyberscoring-in-process/info/info.component";
import {RiskGraphComponent} from "./cyberscoring-results/components/risk-graph/risk-graph.component";
import {RiskResultComponent} from "./cyberscoring-results/components/risk-result/risk-result.component";
import {GraphicSubtitleComponent} from "./cyberscoring-results/components/graphic-subtitle/graphic-subtitle.component";
import {InformationRiskLevelsComponent} from "./cyberscoring-results/components/information-risk-levels/information-risk-levels.component";
import {NextAnalysisComponent} from "./cyberscoring-results/components/next-analysis/next-analysis.component";
import {ElementsAnalyzedAndCriticalityComponent} from "./cyberscoring-results/components/elements-analyzed-and-criticality/elements-analyzed-and-criticality.component";
import {LastAnalysisInformationComponent} from "./cyberscoring-results/components/last-analysis-information/last-analysis-information.component";
import {HistoricalScoringGraphComponent} from "./cyberscoring-results/components/historical-scoring-graph/historical-scoring-graph.component";
import {ReportHistoryTableComponent} from "./cyberscoring-results/components/report-history-table/report-history-table.component";
import {LoadingComponent} from "./loading/loading.component";
import {ModalComponent} from "./modal/modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CbyFreemiumAlertModule } from "src/app/components/cby-freemium-alert/cby-freemium-alert.module";
import { ServiceHeaderModule } from "src/app/components/common/service-header/service-header.module";
import { ModalModule } from "src/app/components/custom/modal/modal.module";
import { ChartsModule } from "ng2-charts";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SliderModule,
    NzSpinnerModule,
    NgxGaugeModule,
    DynamicRenderComponentModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    CbyFreemiumAlertModule,
    ServiceHeaderModule,
    ChartsModule
  ],
  declarations: [
    CyberscoringServiceComponent,
    CyberscoringInProcessComponent,
    CyberscoringNotStartedComponent,
    CyberscoringResultsComponent,
    GenericInfoComponent,
    InfoComponent,
    RiskGraphComponent,
    RiskResultComponent,
    GraphicSubtitleComponent,
    InformationRiskLevelsComponent,
    NextAnalysisComponent,
    ElementsAnalyzedAndCriticalityComponent,
    LastAnalysisInformationComponent,
    HistoricalScoringGraphComponent,
    ReportHistoryTableComponent,
    LoadingComponent,
    ModalComponent,
  ],
  exports: [
    CyberscoringServiceComponent,
    CyberscoringInProcessComponent,
    CyberscoringNotStartedComponent,
    CyberscoringResultsComponent,
    GenericInfoComponent,
    InfoComponent,
    RiskGraphComponent,
    RiskResultComponent,
    GraphicSubtitleComponent,
    InformationRiskLevelsComponent,
    NextAnalysisComponent,
    ElementsAnalyzedAndCriticalityComponent,
    LastAnalysisInformationComponent,
    HistoricalScoringGraphComponent,
    ReportHistoryTableComponent,
    LoadingComponent,
    ModalComponent,
  ],
})
export class CyberscoringServiceModule {}

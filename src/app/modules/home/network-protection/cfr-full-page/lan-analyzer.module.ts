import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanAnalyzerComponent } from './lan-analyzer.component';
import { ChartsModule } from 'ng2-charts';
import { NzSpinnerModule } from '../../../../components/nz-spinner/nz-spinner.module';
import { NetworkProtectionModule } from '../network-protection.module';
import { ServicessStatusModule } from "../../servicess-status/servicess-status.module";

@NgModule({
    declarations: [LanAnalyzerComponent],
    exports: [LanAnalyzerComponent],
    imports: [
        CommonModule,
        TranslateModule,
        ChartsModule,
        NzSpinnerModule,
        NetworkProtectionModule,
        ServicessStatusModule,

    ]
})
export class LanAnalyzerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { ItpFullPageComponent } from './itp-full-page.component';
import { ServicessStatusModule } from '../../servicess-status/servicess-status.module';
import { IdentityTheftProtectionModule } from '../identity-theft-protection.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    ServicessStatusModule,
    IdentityTheftProtectionModule,
  ],
  declarations: [ItpFullPageComponent],
  exports: [ItpFullPageComponent],
})
export class ItpFullPageModule { }

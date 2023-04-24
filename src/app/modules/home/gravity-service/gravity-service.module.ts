import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GravityServiceComponent } from './gravity-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { GravityIntegratedModule } from 'src/app/components/custom/gravity-integrated/gravity-integrated.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ModalModule,
    NzSpinnerModule,
    GravityIntegratedModule,
  ],
  declarations: [GravityServiceComponent],
  exports: [GravityServiceComponent]
})
export class GravityServiceModule { }

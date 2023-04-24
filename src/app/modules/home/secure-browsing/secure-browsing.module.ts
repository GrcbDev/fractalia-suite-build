import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureBrowsingComponent } from './secure-browsing.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavegacionseguraIntegratedModule } from 'src/app/components/custom/navegacionsegura-integrated/navegacionsegura-integrated.module';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    NavegacionseguraIntegratedModule,
    TranslateModule,
    NzSpinnerModule,
    ModalModule,
  ],
  declarations: [SecureBrowsingComponent],
  exports: [SecureBrowsingComponent]
})
export class SecureBrowsingModule { }

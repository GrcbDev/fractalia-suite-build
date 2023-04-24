import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultServiceComponent } from './default-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    NgbModalModule,
    ModalModule
  ],
  declarations: [DefaultServiceComponent]
})
export class DefaultServiceModule { }

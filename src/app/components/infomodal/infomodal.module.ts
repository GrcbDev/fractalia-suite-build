import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InfoModalComponent } from './infomodal.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSpinnerModule } from '../nz-spinner/nz-spinner.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PipesModule,
    NzSpinnerModule,
    NgbModule,
  ],
  declarations: [
    InfoModalComponent
  ],
  exports: [
    TranslateModule,
    InfoModalComponent,
  ],
  entryComponents:[
    InfoModalComponent
  ]
})
export class InfoModalModule { }

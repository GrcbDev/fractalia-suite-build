import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacWaitingServiceComponent } from './cac-waiting-service.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [CacWaitingServiceComponent],
  exports: [CacWaitingServiceComponent]
})
export class CacWaitingServiceModule { }

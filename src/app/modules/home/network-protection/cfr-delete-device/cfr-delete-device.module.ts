import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfrDeleteDeviceComponent } from './cfr-delete-device.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [CfrDeleteDeviceComponent],
  exports: [CfrDeleteDeviceComponent],
})
export class CfrDeleteDeviceModule { }

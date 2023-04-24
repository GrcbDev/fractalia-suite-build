import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CDKModalComponent } from './cdk-modal.component';
import { CDKModalService } from './services/cdk-modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CDKModalComponent],
  exports:[CDKModalComponent],
  entryComponents:[CDKModalComponent],
  providers:[CDKModalService]
})
export class CDKModalModule { }

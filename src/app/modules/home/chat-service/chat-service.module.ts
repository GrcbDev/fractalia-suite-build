import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatServiceComponent } from './chat-service.component';
import { TranslateModule } from '@ngx-translate/core';
import { ChatModalModule } from 'src/app/components/custom/chatmodal/chatmodal.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'src/app/components/custom/modal/modal.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModalModule,
    ModalModule,
    NzSpinnerModule,
    ChatModalModule
  ],
  declarations: [ChatServiceComponent],
  exports: [ChatServiceComponent]
})
export class ChatServiceModule { }

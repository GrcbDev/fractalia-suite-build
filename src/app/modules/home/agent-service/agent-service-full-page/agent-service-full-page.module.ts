import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentServiceFullPageComponent } from './agent-service-full-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NzSpinnerModule,
    PipesModule,
  ],
  declarations: [AgentServiceFullPageComponent],
  exports: [AgentServiceFullPageComponent]
})
export class AgentServiceFullPageModule { }

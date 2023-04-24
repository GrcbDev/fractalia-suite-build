import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallbackPipe } from './callback.pipe';
import { FilterPipe } from './filter.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FilterPipe,
    CallbackPipe,
    SafePipe,
  ],
  exports: [FilterPipe, CallbackPipe, SafePipe],

})
export class PipesModule { }

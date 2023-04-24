import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinnerModule } from 'src/app/components/nz-spinner/nz-spinner.module';
import { DynamicRenderComponentModule } from 'src/app/dynamic-render/dynamic-render-component.module';
import { CookiesComponent } from './cookies.component';
import { DefaultCookieComponent } from './default-cookie/default-cookie.component';
import { ResidentialCookieComponent } from './residential-cookie/residential-cookie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicRenderComponentModule,
    TranslateModule,
    NzSpinnerModule,
  ],
  declarations: [
    CookiesComponent,
    DefaultCookieComponent,
    ResidentialCookieComponent,
  ],
  providers: [],
  exports: [
    CookiesComponent,
    DefaultCookieComponent,
    ResidentialCookieComponent,
  ]
})
export class CookiesModule { }

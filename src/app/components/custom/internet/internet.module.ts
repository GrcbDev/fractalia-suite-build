import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NzSpinnerModule } from "../../nz-spinner/nz-spinner.module";
import { InternetComponent } from "./internet.component";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [
    InternetComponent
  ],
  exports: [
    TranslateModule,
    InternetComponent
  ],
  entryComponents:[
    InternetComponent
  ]
})
export class InternetModule { }

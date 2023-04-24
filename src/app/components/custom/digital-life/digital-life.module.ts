import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NzSpinnerModule } from "../../nz-spinner/nz-spinner.module";
import { DigitalLifeComponent } from "./digital-life.component";


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbModule,
    NzSpinnerModule,
  ],
  declarations: [
    DigitalLifeComponent
  ],
  exports: [
    TranslateModule,
    DigitalLifeComponent
  ],
  entryComponents:[
    DigitalLifeComponent
  ]
})
export class DigitalLifeModule { }

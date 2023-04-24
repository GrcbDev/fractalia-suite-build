import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyUnitComponent } from './family-unit.component';




const routes: Routes = [
  {
    path: '',
    component: FamilyUnitComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyUnitRoutingModule {}

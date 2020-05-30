import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EconomicsHomeComponent } from './economics-home/economics-home.component';


const routes: Routes = [
  {path: '', component: EconomicsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomicsRoutingModule { }

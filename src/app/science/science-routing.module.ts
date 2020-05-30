import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScienceHomeComponent } from './science-home/science-home.component';


const routes: Routes = [
  {path: '', component: ScienceHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScienceRoutingModule { }

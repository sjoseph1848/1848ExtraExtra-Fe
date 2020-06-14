import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScienceHomeComponent } from './science-home/science-home.component';
import { CovidDashComponent } from './covid-dash/covid-dash.component';


export const routes: Routes = [
  {path: '', component: ScienceHomeComponent},
  {path: 'dashboard', component: CovidDashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScienceRoutingModule { }

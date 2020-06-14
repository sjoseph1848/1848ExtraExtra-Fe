import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliticsHomeComponent } from './politics-home/politics-home.component';
import { PresidentHomeComponent } from './president-home/president-home.component';


export const routes: Routes = [
  { path: '', component: PoliticsHomeComponent},
  {path: 'president', component: PresidentHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticsRoutingModule { }

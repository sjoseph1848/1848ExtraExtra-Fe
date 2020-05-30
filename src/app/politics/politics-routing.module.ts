import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliticsHomeComponent } from './politics-home/politics-home.component';


const routes: Routes = [
 { path: '', component: PoliticsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticsRoutingModule { }

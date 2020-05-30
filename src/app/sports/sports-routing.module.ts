import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsHomeComponent} from './sports-home/sports-home.component';

const routes: Routes = [
  {path: '', component: SportsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }

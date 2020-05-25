import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'politics',
    loadChildren: () => import('./politics/politics.module').then(m => m.PoliticsModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then(m => m.ScienceModule)
  },
  {
    path: 'economics',
    loadChildren: () => import('./economics/economics.module').then(m => m.EconomicsModule)
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

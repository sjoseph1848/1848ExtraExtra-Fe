import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScienceRoutingModule, routes } from './science-routing.module';
import { ScienceHomeComponent } from './science-home/science-home.component';
import { SharedModule } from '../shared/shared.module';
import { CovidDashComponent } from './covid-dash/covid-dash.component';
import { CovidCardComponent } from './covid-card/covid-card.component';
import { RouterModule } from '@angular/router';
import { CovidHospitalizationsDashComponent } from './covid-hospitalizations-dash/covid-hospitalizations-dash.component';
import { CovidDashCardComponent } from './covid-dash-card/covid-dash-card.component';
import { CovidDeathsDashComponent } from './covid-deaths-dash/covid-deaths-dash.component';
import { CovidCasesDashComponent } from './covid-cases-dash/covid-cases-dash.component';

@NgModule({
  declarations: [ScienceHomeComponent, CovidDashComponent, CovidCardComponent, CovidHospitalizationsDashComponent, CovidDashCardComponent, CovidDeathsDashComponent, CovidCasesDashComponent],
  imports: [
    CommonModule,
    ScienceRoutingModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ScienceModule { }

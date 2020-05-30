import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsHomeComponent } from './sports-home/sports-home.component';


@NgModule({
  declarations: [SportsHomeComponent],
  imports: [
    CommonModule,
    SportsRoutingModule
  ]
})
export class SportsModule { }

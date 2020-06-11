import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsHomeComponent } from './sports-home/sports-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SportsHomeComponent],
  imports: [
    CommonModule,
    SportsRoutingModule,
    SharedModule,
  ]
})
export class SportsModule { }

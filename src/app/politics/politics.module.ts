import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics-routing.module';
import { PoliticsHomeComponent } from './politics-home/politics-home.component';


@NgModule({
  declarations: [PoliticsHomeComponent],
  imports: [
    CommonModule,
    PoliticsRoutingModule
  ]
})
export class PoliticsModule { }

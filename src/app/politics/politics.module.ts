import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics-routing.module';
import { PoliticsHomeComponent } from './politics-home/politics-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PoliticsHomeComponent],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
    SharedModule
  ]
})
export class PoliticsModule { }

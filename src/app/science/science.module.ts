import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScienceRoutingModule } from './science-routing.module';
import { ScienceHomeComponent } from './science-home/science-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ScienceHomeComponent],
  imports: [
    CommonModule,
    ScienceRoutingModule,
    SharedModule
  ]
})
export class ScienceModule { }

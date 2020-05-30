import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScienceRoutingModule } from './science-routing.module';
import { ScienceHomeComponent } from './science-home/science-home.component';


@NgModule({
  declarations: [ScienceHomeComponent],
  imports: [
    CommonModule,
    ScienceRoutingModule
  ]
})
export class ScienceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicsRoutingModule } from './economics-routing.module';
import { EconomicsHomeComponent } from './economics-home/economics-home.component';


@NgModule({
  declarations: [EconomicsHomeComponent],
  imports: [
    CommonModule,
    EconomicsRoutingModule
  ]
})
export class EconomicsModule { }

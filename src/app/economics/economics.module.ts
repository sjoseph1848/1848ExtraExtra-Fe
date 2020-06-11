import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicsRoutingModule } from './economics-routing.module';
import { EconomicsHomeComponent } from './economics-home/economics-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EconomicsHomeComponent],
  imports: [
    CommonModule,
    EconomicsRoutingModule,
    SharedModule,
  ]
})
export class EconomicsModule { }

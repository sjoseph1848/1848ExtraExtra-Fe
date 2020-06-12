import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { PoliticsRoutingModule } from './politics-routing.module';
import { PoliticsHomeComponent } from './politics-home/politics-home.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { ElectionCardComponent } from './election-card/election-card.component';
import { PresidentCardComponent } from './president-card/president-card.component';
import { PresidentHomeComponent } from './president-home/president-home.component';


@NgModule({
  declarations: [PoliticsHomeComponent, TableComponent, ElectionCardComponent, PresidentCardComponent, PresidentHomeComponent],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class PoliticsModule { }

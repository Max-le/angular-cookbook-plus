import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router"

import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { NbLayoutModule, NbCardModule, NbMenuModule, NbIconModule} from '@nebular/theme';



@NgModule({
  bootstrap:[DashboardComponent],

  declarations: [DashboardComponent, MenuComponent],
  imports: [
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    NbMenuModule,
    NbIconModule,
    CommonModule,
  ], 
  exports: [MenuComponent],

})
export class DashboardModule { }

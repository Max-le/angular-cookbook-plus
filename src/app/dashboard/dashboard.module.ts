import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router"

import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { NbLayoutModule, NbCardModule, NbMenuModule, NbIconModule, 
  NbSearchModule, NbButtonModule, NbPopoverModule,
   NbSidebarModule} from '@nebular/theme';
import { InMyFridgeComponent } from './in-my-fridge/in-my-fridge.component';



@NgModule({

  declarations: [DashboardComponent, MenuComponent, InMyFridgeComponent],
  imports: [
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    NbMenuModule,
    NbIconModule,
    NbButtonModule,
    CommonModule,
    NbSearchModule,
    NbPopoverModule,
    NbSidebarModule,
  ], 

})
export class DashboardModule { }

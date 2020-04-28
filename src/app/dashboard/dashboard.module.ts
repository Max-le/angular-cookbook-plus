import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router"

import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { NbLayoutModule, NbCardModule} from '@nebular/theme';
import { MyComponentComponent } from './my-component/my-component.component';



@NgModule({
  bootstrap:[DashboardComponent],

  declarations: [DashboardComponent, MenuComponent, MyComponentComponent],
  imports: [
    RouterModule,
    NbLayoutModule,
    NbCardModule,
  
  ], 
  exports: [MyComponentComponent, MenuComponent],

})
export class DashboardModule { }

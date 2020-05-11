import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import {DashboardComponent} from './dashboard/dashboard.component';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {LandingComponent} from './landing/landing.component';
import { InMyFridgeComponent } from './dashboard/in-my-fridge/in-my-fridge.component';
import { AboutComponent } from './about/about.component';


// Routes array
const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: LandingComponent},
  {path: 'inmyfridge', component : InMyFridgeComponent},
  {path:'about', component: AboutComponent},

  // Auth components routes from Nebular
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

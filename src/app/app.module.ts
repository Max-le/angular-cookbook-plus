import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbCardModule, NbIconModule, NbSearchModule} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import {HttpClientModule} from '@angular/common/http';


import {NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken} from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { TestAPIComponent } from './test-api/test-api.component';
import { InMyFridgeComponent } from './dashboard/in-my-fridge/in-my-fridge.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent, LandingComponent, TestAPIComponent, AboutComponent//, DashboardComponent, MenuComponent, InMyFridgeComponent
  ],
  imports: [
    DashboardModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbIconModule,
    NbSearchModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    // Configuring authentication strategy
    // https://akveo.github.io/nebular/docs/auth/installation#configure-a-strategy
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email', // Alias for this strategy
          baseEndpoint: 'http://localhost:8080',
          login: {
            endpoint: '/login',
            method: 'post',
            redirect: {
              success: 'dashboard',
              failure: null,
            }
          },
          register: {
            endpoint: 'users/sign-up',
            method: 'post',
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          }
        }),
      ],
      forms: {},
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

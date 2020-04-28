import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbCardModule, NbIconModule} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import {HttpClientModule} from '@angular/common/http';

import {NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken} from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent, LandingComponent, DashboardComponent, MenuComponent
  ],
  imports: [
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
    HttpClientModule,

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

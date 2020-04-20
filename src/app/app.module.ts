import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule, NbMenuModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { LargeCircleButtonComponent } from './components/large-circle-button/large-circle-button.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { JumbotronComponent } from './landing/jumbotron/jumbotron.component';

import {HttpClientModule} from '@angular/common/http';

import {NbPasswordAuthStrategy, NbAuthModule} from '@nebular/auth';

@NgModule({
  declarations: [
    AppComponent, LargeCircleButtonComponent, LoginComponent, RegisterComponent, MainMenuComponent, JumbotronComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    HttpClientModule,

    // Configuring authentication strategy
    // https://akveo.github.io/nebular/docs/auth/installation#configure-a-strategy
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email', // Alias for this strategy
          baseEndpoint: 'http://localhost:4200',
          login: {
            endpoint: '/login',
            method: 'post',
          },
          register: {
            endpoint: '/sign-up',
            method: 'post',
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

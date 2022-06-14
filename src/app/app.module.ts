import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ServicesComponent } from './services/services.component';
import { ReservationComponent } from './reservation/reservation.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'

import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NgxPaginationModule } from 'ngx-pagination';
//import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

//import { FormBuilder } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChambreComponent,
    ServicesComponent,
    ReservationComponent,
    HomeComponent,
    LoginComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatSliderModule,
    // NgxSliderModule,
    AuthModule.forRoot({
      domain:'dev-mvss-c6p.eu.auth0.com',
      clientId: 'qC0JwInfJAyoicru9SngRGYsvkpsXDQh'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter : () => localStorage.getItem('access_token')
      }
    }),
    BrowserAnimationsModule
    //ReactiveFormsModule
     //FormBuilder

  ],
  providers: [{provide:JWT_OPTIONS, useValue:JWT_OPTIONS}, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ServicesComponent } from './services/services.component';
import { ReservationComponent } from './reservation/reservation.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ChambreComponent,
    ServicesComponent,
    ReservationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

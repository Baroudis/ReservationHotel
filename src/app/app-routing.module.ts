import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambreComponent } from './chambre/chambre.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
{path: '', component: HomeComponent },
{path: 'chambre', component: ChambreComponent},
{path: 'reservation', component: ReservationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

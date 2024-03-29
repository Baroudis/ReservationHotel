import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambreComponent } from './chambre/chambre.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
//import { AuthGuard } from '@auth0/auth0-angular';
import { IsSignedInGuard } from './services/is-signed-in-guard.service';

const routes: Routes = [
{path: '', component: HomeComponent },
{path: 'chambre', component: ChambreComponent, canActivate: [IsSignedInGuard]},
{path: 'reservation', component: ReservationComponent, canActivate: [IsSignedInGuard] },
{path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

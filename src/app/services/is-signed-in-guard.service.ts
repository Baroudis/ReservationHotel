import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
//import { Session } from 'inspector';
//import { AuthGuard } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard  implements CanActivate{

  constructor( private _router:Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

  //return localStorage.getItem("login").isSigned();
  //return this._session.isSigned();
  //this.authService.isLoggedIn
  
  if(localStorage.getItem("Login")=="logged"){
    return true
  }
  //ng serve
  alert('log toi!!')
  this._router.navigate(['login']);
  return false
}


}


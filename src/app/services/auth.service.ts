import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
//import { FormBuilder } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

Token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImJhcm91ZGkiLCJpYXQiOjE1MTYyMzkwMjIsInJvbGUiOiJBRE1JTiJ9._rQbEvOA-ORSeQClDDYGKnDkcBTnuj7hv0WfdmG_ljc";
 
constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private log: AuthModule) { }

email: string = ""
password: string =""
// tik:any;
// expToken:any
// tokenPayload:any
// expirationDate:any
//loginForm : any

// getLog(){
//console.log(Token)
// console.log(this.loginForm)
// }

// getMeth(){
//   //return  this.tik = this.jwtHelper.decodeToken(localStorage.getItem('access_token'))
//    this.tik = this.jwtHelper.decodeToken(this.Token);
//    console.log(this.tik)
// }


// GetTokenDecoded() {
//   console.log(this.jwtHelper.decodeToken(this.expToken))
//   this.tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(this.expToken));
//   console.log(this.tokenPayload)
// }
// getTokenExpirationDate() {
//   this.expirationDate = this.jwtHelper.getTokenExpirationDate(this.expToken);
// }
// isAuthenticated(): boolean {
//   return !this.jwtHelper.isTokenExpired(this.expToken);
// }

}



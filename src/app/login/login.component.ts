import { Component, OnInit } from '@angular/core';
//import { exists } from 'fs';
import { AuthService } from '../services/auth.service';
//import { AuthService } from '@auth0/auth0-angular';
//import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>'
})
export class LoginComponent implements OnInit {

  expToken: any;
  expToken2 : any;
  tokenPayload: any;
  expirationDate: any;


  pseudo: string = ""
  mdp: string = ""
  statuss : string =""
  vari:any
 

  constructor(private log: AuthService, private brow: BrowserModule, private como: CommonModule,private jwtHelper: JwtHelperService) {

    // this.loginform = this.formBuilder.group({
    //   pseudo: "",
    //   mdp: ""
    // })
    this.expToken  ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImJhcm91ZGkiLCJpYXQiOjE1MTYyMzkwMjIsInJvbGUiOiJBRE1JTiJ9._rQbEvOA-ORSeQClDDYGKnDkcBTnuj7hv0WfdmG_ljc";

    this.expToken2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJhcm91ZGkiLCJpYXQiOjE1MTYyMzkwMjIsInJvbGUiOiJ1c2VyIn0.WhACl4tNV2m7gNkH_etaSSf0vDPjsiOx_boVgHHbx7s";

    this.GetTokenDecoded();
    this.getTokenExpirationDate();
  }
  GetTokenDecoded() {
    console.log(this.vari = this.jwtHelper.decodeToken(this.expToken))
    this.tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(this.expToken));
    console.log(this.vari.name)
    console.log(this.vari.role)
  
  }
  getTokenExpirationDate() {
    this.expirationDate = this.jwtHelper.getTokenExpirationDate(this.expToken);
  }
  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.expToken);
  }


  loginform: any;
  isLogin : any;
  //Token : any;

  ngOnInit(): void {

  }


  logG() {

    console.log(this.pseudo, this.mdp)
    this.statuss = "logged"
    console.log(this.statuss)
    localStorage.setItem('access_token', this.log.Token)
    //console.log(localStorage.getItem('access_token'))
    localStorage.setItem('Login', this.statuss)
    console.log(localStorage)
    //  this.log.getLog().subscribe(data => {
    //     this.log.Token = data;
    //     console.log(this.log)
    //console.log(this.mdp)
    //   })
    //   if(this.pseudo exists() & this.mdp exists){
    //     if(this.pseudo == ??? & this.mdp == ???){
    //   StorageEvent,
    //   isLogged
    //   }else{
    // alert(Pseudo ou mdp erroné)
    //   }

    // }else{
    //   alert(utilisateur inconnu)
    // }

    //  }

  }


  getLogin() {
    console.log(localStorage.getItem('Login'))
    return this.isLogin = localStorage.getItem('Login')
    // this.
 }

 destroy(){
  localStorage.clear();
 }



}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http : HttpClient) { }

auth : boolean = false
debut = "http://localhost:8080/"


isAuth(){
  return this.auth = true
}

  getchambres(){
    return this.http.get( this.debut + "chambre");
  }

  getdateA(){
    return this.http.get(this.debut +"datearrive");
  }

  getdateD(){
    return this.http.get(this.debut +"datedepart")
  }

  saveProduit(reserv:any){
    return this.http.post(this.debut +"reservation", reserv)
  }

  getchambresFiltrer(min:any, max:any){
    return this.http.get(this.debut +"chambre?prix_gte="+min+"&prix_lte="+max);
  }

  getchambresimple(){
    return this.http.get(this.debut +"chambre?type=simple");
  }

  getchambreType(mots:any){
    return this.http.get(this.debut + "chambre?type="+ mots);
  }

//   getpagination(page:any){
//   return this.http.get(this.debut + "_page="+ page + "& imite=3")
// }

}

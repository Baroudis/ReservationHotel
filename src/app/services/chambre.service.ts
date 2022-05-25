import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http : HttpClient) { }


  getchambres(){
    return this.http.get("http://localhost:3000/chambre");
  }

  getdateA(){
    return this.http.get("http://localhost:3000/datearrive");
  }

  getdateD(){
    return this.http.get("http://localhost:3000/datedepart")
  }

  saveProduit(reserv:any){
    return this.http.post("http://localhost:3000/reservation", reserv)
  }

  getchambresFiltrer(min:any, max:any){
    return this.http.get("http://localhost:3000/chambre?prix_gte="+min+"&prix_lte="+max);
  }

  getchambresimple(){
    return this.http.get("http://localhost:3000/chambre?type=simple");
  }

  getchambreType(mots:any){
    return this.http.get("http://localhost:3000/chambre?type="+mots);
  }

}

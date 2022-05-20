import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpClient) { }

  getreservation(){
    return this.http.get("http://localhost:3000/reservation")
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReservationService } from '../services/reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservation : any;

  constructor(private reservationservice: ReservationService, private as: AuthService) { } 

  ngOnInit(): void {
    this.reservations()
    console.log(this.as.Token)
  }


reserv:any;

  reservations() {
    this.reservationservice.getreservation().subscribe(data => {
      this.reserv = data;
      console.log(this.reserv)
    })
  }




}

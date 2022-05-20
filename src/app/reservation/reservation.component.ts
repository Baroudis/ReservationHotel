import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservation : any;

  constructor(private reservationservice: ReservationService) { } 

  ngOnInit(): void {
    this.reservations()
  }


reserv:any;

  reservations() {
    this.reservationservice.getreservation().subscribe(data => {
      this.reserv = data;
      console.log(this.reserv)
    })
  }




}

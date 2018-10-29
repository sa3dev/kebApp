import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../../model/event';
import { HttpClient } from '@angular/common/http';
import { eventUrl } from '../../../config';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CalendarDetailService {
  reservationDate: Date;
  events: Reservation[] = [];
  reservationsSubject = new Subject<Reservation[]>();

  constructor(
    private router:Router,
    private httpClient: HttpClient
  ) { }

  saveTheDate(date:Date) {
    this.reservationDate = date;
    this.router.navigate(['/oftheday'])
  }

  getListReservationsOfTheDay(value: Date) {
    this.httpClient.get<Reservation[]>(eventUrl).subscribe(
      data => {
        this.events = data;
        this.events
        .filter((event: Reservation) => {
         return (value.toLocaleDateString() == new Date(event.start).toLocaleDateString())
      },
      error => {
        console.log(error);        
      }
    )
    this.emitReservationsOfTheDay();
  })
}
emitReservationsOfTheDay() {
  this.reservationsSubject.next(this.events);
}

}

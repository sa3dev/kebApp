import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../../model/event';
import { HttpClient } from '@angular/common/http';
import { eventUrl } from '../../../config';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';





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
    this.httpClient.get<Reservation[]>(eventUrl).pipe(
      map(
        (events: Reservation[]) => events.filter(
          (event: Reservation) => value.toLocaleDateString() == new Date(event.start).toLocaleDateString()  
        )
      )
    ).subscribe(
      (events:Reservation[]) => {
        this.events = events;
        this.emitReservationsOfTheDay()
      },      
      error => {
        console.log(error);        
      }
    )

  }

emitReservationsOfTheDay() {
  console.log(this.events)
  this.reservationsSubject.next(this.events);
}

}

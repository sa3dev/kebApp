import { Injectable } from '@angular/core';
import { eventUrl } from '../../config';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/event';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  events: Reservation[] = [];
  reservationsSubject = new Subject<Reservation[]>();

  constructor(
    private httpClient: HttpClient
  ) { }

  getListReservations() {
    this.httpClient.get<Reservation[]>(eventUrl).subscribe(
      (events: Reservation[]) => {
        this.events = events ;
        this.events.map( data => data.start = new Date(data.start));
        this.emitReservations();
      },
      error => {
        console.log(error);
      }
    )
  }
   emitReservations() {
     this.reservationsSubject.next(this.events);
   }
   emitObservable(){
    return this.reservationsSubject.asObservable();
   }

  createEvent(reservation: Reservation) {
    this.httpClient.post(eventUrl,
      reservation)
      .subscribe(
        data => {
          console.log("Event Request is successful ", data);
          this.getListReservations();
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }
  updateEvent(reservation: Reservation) {
    const url = `${eventUrl}/${reservation.id}`;
    this.httpClient.put(url, reservation)
      .subscribe(
        data => {
          console.log("Put Request is successful ", data);
          this.getListReservations();
        },
        error => {
          console.log("Rrror5", error);
        }
      );
  }

  deleteEVent(id: number):void {
    const url = `${eventUrl}/${id}`;
    this.httpClient.delete(url).subscribe(data => {
      console.log("réservations supprimé", data)
      this.getListReservations()
    },
    error => { 
      console.log(error)
    })
  }
}
 


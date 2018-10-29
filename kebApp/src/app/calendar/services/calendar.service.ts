import { Injectable } from '@angular/core';
import { eventUrl } from '../../config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
      data => {
        this.events = data ;
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
  //   reservationOfTheDay(value: Date) {
  //     this.httpClient.get<Reservation[]>(eventUrl).subscribe(
  //       data => {
  //         this.events = data;
  //       }
  //     )

  //   // return this.events.filter((reservation: Reservation) => {
  //   //         if (reservation.start == value) {
  //   //           console.log("nom" + reservation.title)
  //   //           return true;
  //   //         } else {
  //   //           return false;
  //   //         }
  //   //  })
  // }

  createEvent(reservation: Reservation) {
    this.httpClient.post(eventUrl,
      reservation)
      .subscribe(
        data => {
          console.log("Event Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }
  deleteEVent(id: number):void {
    const url = `${eventUrl}/${id}`;
    this.httpClient.delete(url).subscribe(data => {
      this.getListReservations();
      console.log("réservations supprimé", data)
    },
    error => { 
      console.log(error)
    }
    )
  }
}
 


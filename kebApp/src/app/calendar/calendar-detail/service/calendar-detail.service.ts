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
    private httpClient: HttpClient
  ) { }


  getListReservationsOfTheDay(value: Date) {
    this.httpClient.get<Reservation[]>(eventUrl).pipe(
      map(
        (events: Reservation[]) => events.filter(
          (event: Reservation) => value.toLocaleDateString() == new Date(event.start).toLocaleDateString()
        )
      )
    ).subscribe(
      (events: Reservation[]) => {
        this.events = events;
        this.emitReservationsOfTheDay()
      },
      error => {
        console.log(error);
      }
    )

  }
  createEvent(reservation: Reservation, date: Date) {
    this.httpClient.post(eventUrl,
      reservation)
      .subscribe(
        data => {
          console.log("Event Request is successful ", data);
          this.getListReservationsOfTheDay(date);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }
  updateEvent(reservation: Reservation, date: Date) {
    const url = `${eventUrl}/${reservation.id}`;
    this.httpClient.put(url, reservation)
      .subscribe(
        data => {
          console.log("Put Request is successful ", data);
          this.getListReservationsOfTheDay(date)
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }

  emitReservationsOfTheDay() {
    this.reservationsSubject.next(this.events);
  }

  deleteEVent(id: number, date: Date): void {
    const url = `${eventUrl}/${id}`;
    this.httpClient.delete(url).subscribe(data => {
      console.log("réservations supprimé", data)
      this.getListReservationsOfTheDay(date)
    },
      error => {
        console.log(error)
      })
  }
}

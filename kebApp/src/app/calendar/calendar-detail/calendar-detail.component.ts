import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarDetailService } from './service/calendar-detail.service';
import { CalendarService } from '../../calendar/services/calendar.service'
import { Observable } from 'rxjs';
import { Reservation } from '../model/event'



@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.scss']
})
export class CalendarDetailComponent implements OnInit, OnDestroy {
  reservationDay: Date;
  eventsOfTheDay: Reservation[];
  reservationSubscription: Subscription;
  private capacityReservation: number = 50;
  private capacityReserved: number = 0;

  constructor(
    private calendarDetailService: CalendarDetailService,
  ) { }

  ngOnInit() {
    this.reservationDay = this.calendarDetailService.reservationDate;
    if (this.reservationDay === undefined ) {
      this.reservationDay = new Date();
    };
    this.reservationSubscription = this.calendarDetailService.reservationsSubject.subscribe(
      (events: Reservation[]) => {
        this.eventsOfTheDay = events;
      })
    this.calendarDetailService.getListReservationsOfTheDay(this.reservationDay);

   }

  addEvent(): void {
    this.eventsOfTheDay.push({
      id: Math.floor(Math.random() * 10000),
      title: '',
      start: this.reservationDay,
      draggable: false,
      capacity: 1,
    });
  }

   ngOnDestroy(): void {
    this.reservationSubscription.unsubscribe()
   }
   onEdit(event) {
    this.calendarDetailService.updateEvent(event, this.reservationDay);
   }
   onAdd(reservation) {
     const newReservation: Reservation = reservation;
     newReservation.draggable = true;
     this.calendarDetailService.createEvent(reservation, this.reservationDay);
   }

   onDelete(id) {
     this.calendarDetailService.deleteEVent(id, this.reservationDay)
   }
}

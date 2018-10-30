import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarDetailService } from './service/calendar-detail.service';
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
   ngOnDestroy(): void {
    this.reservationSubscription.unsubscribe()
   }
}

import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarDetailService } from './service/calendar-detail.service';
import { Observable } from 'rxjs';
import { CalendarService } from '../services/calendar.service';
import { Reservation } from '../model/event'



@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.scss']
})
export class CalendarDetailComponent implements OnInit {
  reservationDay: Date;
  events: Reservation[];
  reservationSubscription: Subscription;

  constructor(
    private calendarDetailService: CalendarDetailService,
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.reservationDay = this.calendarDetailService.reservationDate;
    if (this.reservationDay === undefined ) {
      this.reservationDay = new Date();
    }
    this.reservationSubscription = this.calendarService.reservationsSubject.subscribe(
      (events: Reservation[]) => {
        this.events = events;
      })
    this.calendarService.getListReservations();

   }
    

}

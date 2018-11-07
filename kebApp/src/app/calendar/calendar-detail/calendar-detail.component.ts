import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarService } from '../../calendar/services/calendar.service'
import { Reservation } from '../model/event'
import { ActivatedRoute, Router } from '@angular/router';



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
    private calendarService: CalendarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['start']);
    this.reservationDay = new Date(this.route.snapshot.params['start']);
    if (this.reservationDay === undefined ) {
      this.reservationDay = new Date();
    };
    this.reservationSubscription = this.calendarService.reservationsSubject.subscribe(
      (events: Reservation[]) => {
        this.eventsOfTheDay = events;
      })
    this.calendarService.getListReservationsOfTheDay(this.reservationDay);

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
    this.calendarService.updateEventOfTheDay(event, this.reservationDay);
   }
   onAdd(reservation) {
     const newReservation: Reservation = reservation;
     newReservation.draggable = true;
     this.calendarService.createEventOfTheDay(reservation, this.reservationDay);
   }

   onDelete(id) {
     this.calendarService.deleteEVentOfTheDay(id, this.reservationDay)
   }
}

import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { isSameDay, isSameMonth} from 'date-fns';
import {  Subscription, Observable } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { CalendarService } from './services/calendar.service';
import { Reservation } from './model/event';
import { CalendarDetailService } from './calendar-detail/service/calendar-detail.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  locale: string = 'fr';
  view: CalendarView = CalendarView.Month;
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  CalendarView = CalendarView;
  dayReservation: Date;
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  events$: Observable<Reservation[]>;
  events: Reservation[]=[];
  reservationSubscription: Subscription;

  activeDayIsOpen: boolean = true;

  constructor(
    private calendarService: CalendarService,
    private calendarDetail: CalendarDetailService) { }

    ngOnInit(){     
      this.reservationSubscription = this.calendarService.reservationsSubject.subscribe(
        (events: Reservation[]) => {
          this.events = events;          
      })
      this.calendarService.getListReservations();    
      this.events$ = this.calendarService.emitObservable()
    }
    

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({event,newStart}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    this.onConfirm(event)
  }


  addEvent(): void {
    this.events.push({
      id: Math.floor(Math.random() * 10000),
      title: '',
      start: new Date(),
      draggable: false,
      capacity: 1,
    });
  }
  onConfirm(reservation) {
    const newReservation :Reservation = reservation;
    newReservation.draggable = true;
    this.calendarService.updateEvent(newReservation);    
  }
  onAdd(reservation) {
    const newReservation: Reservation = reservation;
    newReservation.draggable = true;
    this.calendarService.createEvent(reservation);
  }

  onDelete(id) {
    this.calendarService.deleteEVent(id)
  };
  ngOnDestroy(){
    this.reservationSubscription.unsubscribe();
  }
  ofTheDay(clickedDate) {
    this.dayReservation = clickedDate;
    this.calendarDetail.saveTheDate(this.dayReservation);
  }
}

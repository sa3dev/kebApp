import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { isSameDay, isSameMonth} from 'date-fns';
import { Subscription, Observable } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { CalendarService } from '../services/calendar.service';
import { Reservation } from '../model/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  /**
   * the locale variable is for translate the calendar in french
   * reservationSubscription for unsubscribe easily the subject
   */
  locale: string = 'fr';
  view: CalendarView = CalendarView.Month;
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  CalendarView = CalendarView;
  dayReservation: Date;
  viewDate: Date = new Date();
  events$: Observable<Reservation[]>;
  events: Reservation[]=[];
  reservationSubscription: Subscription;
  activeDayIsOpen: boolean = true;
  

  constructor(
    private calendarService: CalendarService,
    private router: Router) { }
/**
 * OnInit, we subscribe the events and we render an observable array for async event
 */
    ngOnInit(){     
      this.reservationSubscription = this.calendarService.reservationsSubject.subscribe(
        (events: Reservation[]) => {
          this.events = events;          
      })
      this.calendarService.getListReservations();    
      this.events$ = this.calendarService.emitObservable()
    }
    
/**
 * This function is for selecting the clicked day for launch the calendarDetailComponent
 */
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }
/**
 *  function for changed the time of the event 
 */
  eventTimesChanged({event,newStart}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    this.onConfirm(event)
  }
/**
 * function for add a new event
 */

  addEvent(): void {
    this.events.push({
      id: Math.floor(Math.random() * 10000),
      title: '',
      start: new Date(),
      draggable: false,
      capacity: 1,
    });
  }
  /**
   * @param reservation new Reservation for update an event
   */
  onConfirm(reservation) {
    const newReservation :Reservation = reservation;
    newReservation.draggable = true;
    this.calendarService.updateEvent(newReservation);    
  }
/**
 * 
 * @param reservation new Reservation for create a new event
 */
  onAdd(reservation) {
    const newReservation: Reservation = reservation;
    newReservation.draggable = true;
    this.calendarService.createEvent(reservation);
  }

  onDelete(id) {
    this.calendarService.deleteEVent(id)
  };

  /**
   * function for unsubscribe the subject
   */
  ngOnDestroy(){
    this.reservationSubscription.unsubscribe();
  }
  /**
   * 
   * @param clickedDate 
   * function for routing the calendarDetailComponent with the params of the day
   */
  ofTheDay(clickedDate: Date) {
    this.router.navigate(['reservation/', clickedDate.toJSON()])
  }
}

import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { startOfDay, subDays, isSameDay, isSameMonth, addHours, subHours } from 'date-fns';
import { Subject, Subscription } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from './services/calendar.service';
import { Reservation } from './model/event';
import { Router } from '@angular/router';
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



  events: Reservation[];
  reservationSubscription: Subscription;

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,
    private calendarService: CalendarService,
    private calendarDetail: CalendarDetailService) { }

    ngOnInit(){
      this.reservationSubscription = this.calendarService.reservationsSubject.subscribe(
        (events: Reservation[]) => {
          this.events = events;
      })
      this.calendarService.getListReservations();      
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

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      id: Math.floor(Math.random()*10000),
      title: '',
      start: new Date(),
      draggable: true,
      capacity: 1,
    });
  }
  onConfirm(reservation) {
    const newReservation :Reservation = reservation;
    this.calendarService.updateEvent(newReservation);    
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

import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { startOfDay, subDays, isSameDay, isSameMonth, addHours, subHours } from 'date-fns';
import { Subject, Subscription } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from './services/calendar.service';
import { Reservation } from './model/event'

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


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

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };


  refresh: Subject<any> = new Subject();

  events: Reservation[];
  reservationSubscription: Subscription;

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,
    private calendarService: CalendarService) { }

    ngOnInit() {
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
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      id: Math.floor(Math.random()*1000),
      title: 'Nouvelle réservation',
      start: startOfDay(new Date()),
      draggable: true,
      capacity: 1,
    });
    this.refresh.next();
  }
  onConfirm(reservation) {
    const newReservation :Reservation = reservation;
    this.calendarService.createEvent(newReservation);    
  }

  onDelete(id) {
    this.calendarService.deleteEVent(id)
  };
  ngOnDestroy(){
    this.reservationSubscription.unsubscribe();
  }
}

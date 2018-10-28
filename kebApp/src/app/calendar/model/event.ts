import { CalendarEvent } from 'angular-calendar'


export interface Reservation extends CalendarEvent {
    start: Date;
    title: string;
    id: number;
    capacity: number;
    draggable: boolean;
  }


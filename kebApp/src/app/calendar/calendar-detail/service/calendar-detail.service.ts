import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CalendarDetailService {
  reservationDate: Date;

  constructor(
    private router:Router
  ) { }

  saveTheDate(date:Date) {
    this.reservationDate = date;
    this.router.navigate(['/oftheday'])
  }
}

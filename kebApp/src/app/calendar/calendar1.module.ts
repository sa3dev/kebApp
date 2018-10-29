import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import the features component
import { CalendarComponent } from './calendar.component';

// Import Forms modules and ReactiveFormsModule
import { FormsModule } from '@angular/forms';

// Import Calendar modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Import for translate calendar in french
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'

registerLocaleData(localeFr);


@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    FormsModule, 
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    CalendarComponent
  ]
})
export class Calendar1Module { }


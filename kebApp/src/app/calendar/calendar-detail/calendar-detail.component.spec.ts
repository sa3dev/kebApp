import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDetailComponent } from './calendar-detail.component';
import { CalendarModule as angularCalendar, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarService } from '../services/calendar.service';
import { HttpClientModule } from '@angular/common/http';
import { CalendarRoutingModule } from '../calendar-routing.module';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';




describe('CalendarDetailComponent', () => {
  let component: CalendarDetailComponent;
  let fixture: ComponentFixture<CalendarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
      CalendarDetailComponent
     ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CoreRoutingModule,
        CalendarRoutingModule,
        FlatpickrModule.forRoot(),
        angularCalendar.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        })
      ],
      providers: [
        CalendarService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

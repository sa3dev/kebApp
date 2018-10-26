import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { ListusersComponent } from './users/listusers/listusers.component';
import { LoginComponent } from './users//login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { CalendarComponent } from './calendar/calendar.component';

// Import routing modules
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

// Import Forms modules and do not forget motherf****** ReactiveFormsModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Import Calendar modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Import for translate calendar in french
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'

registerLocaleData(localeFr);


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    ReactiveFormsModule,
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
    ListusersComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent
],
    exports: [CoreRoutingModule]
})
export class CoreModule { }

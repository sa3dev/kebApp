import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { AuthGuardService } from '../core/services/auth/auth-guard.service';


const routes: Routes = [
  { path: 'reservations',   component: CalendarComponent },
  { path: 'reservation/:start', component: CalendarDetailComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class CalendarRoutingModule { }

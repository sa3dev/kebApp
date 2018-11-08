import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Now we import the 2 components of this feature module and the AuthGuardService 
*/
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { AuthGuardService } from '../core/services/auth/auth-guard.service';

/**
 * here we create the routes
 */

const routes: Routes = [
  { path: 'reservations', canActivate: [AuthGuardService], component: CalendarComponent },
  { path: 'reservation/:start', component: CalendarDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }

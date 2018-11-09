import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantmenuComponent } from './restaurantmenu.component';
import { AuthGuardService } from '../core/services/auth/auth-guard.service';
import { AddmenuComponent } from './addmenu/addmenu.component';

const ROUTES:Routes = [
  {path:'', canActivate:[AuthGuardService], component: RestaurantmenuComponent},
  {path:'addmenu', component: AddmenuComponent}
]

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RestaurantmenuRoutingModule { }

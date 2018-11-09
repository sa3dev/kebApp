import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { ListusersComponent } from './users/listusers/listusers.component';
import { RegisterComponent } from './users/register/register.component';
import { ProductsComponent } from './products/products.component';
import { RestaurantmenuComponent } from '../restaurantmenu/restaurantmenu.component';
import { StockComponent } from '../stock/stock.component';
import { AuthGuardService } from './services/auth/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'users', canActivate: [AuthGuardService], component: ListusersComponent },
  { path: 'register',canActivate: [AuthGuardService], component: RegisterComponent },
  { path: 'products', canActivate: [AuthGuardService], component: ProductsComponent },
  { path: 'fournisseurs',loadChildren:'../fournisseur/fournisseur.module#FournisseurModule'},
  { path: 'reservation', loadChildren:'../calendar/calendar.module#CalendarModule'},
  { path: 'users', canActivate: [AuthGuardService], component: ListusersComponent },
  { path: 'register', canActivate: [AuthGuardService], component: RegisterComponent },
  { path: 'products', canActivate: [AuthGuardService], component: ProductsComponent },
  { path: 'inventaire', canActivate: [AuthGuardService], component: StockComponent },
  { path: 'carte', canActivate: [AuthGuardService], component: RestaurantmenuComponent },
=======
  { path: 'calendar', canActivate: [LoginService], component: CalendarComponent },
  { path: 'users', canActivate: [LoginService], component: ListusersComponent },
  { path: 'register',canActivate: [LoginService], component: RegisterComponent },
  { path: 'products', canActivate: [LoginService], component: ProductsComponent },
  { path: 'fournisseurs', canActivate: [LoginService], component:FournisseurcomponentComponent},
  
  { 
    path: 'users', 
    canActivate: [LoginService], 
    component: ListusersComponent 
  },
  { 
    path: 'register',
    canActivate: [LoginService], 
    component: RegisterComponent 
  },
  { path: 'products', canActivate: [LoginService], component: ProductsComponent },
  { path: 'inventaire',  component: StockComponent }, /* canActivate: [ LoginService ]  */
  { path: 'carte', canActivate: [LoginService], component: RestaurantmenuComponent },
  { path: 'oftheday', canActivate: [LoginService], component: CalendarDetailComponent}
>>>>>>> stock
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: []
})
export class CoreRoutingModule { }

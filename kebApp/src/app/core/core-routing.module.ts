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
  { path: '', 
    redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CoreRoutingModule { }

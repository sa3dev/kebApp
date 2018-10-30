import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { ListusersComponent } from './users/listusers/listusers.component';
import { RegisterComponent } from './users/register/register.component';
import { CalendarComponent } from './../calendar/calendar.component';
import { LoginService } from './users/login/login.service';
import { ProductsComponent } from './products/products.component';
import { FournisseurcomponentComponent } from '../fournisseur/fournisseurcomponent/fournisseurcomponent.component';

import { StockComponent } from '../stock/stock.component';


const routes: Routes = [
  { path: '', 
    redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'users', canActivate: [LoginService], component: ListusersComponent },
  { path: 'register',canActivate: [LoginService], component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'fournisseurs', component:FournisseurcomponentComponent},
  
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
  { path: 'products', component: ProductsComponent },
  { path: 'inventaire' , component: StockComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CoreRoutingModule { }

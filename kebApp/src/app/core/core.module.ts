import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { ListusersComponent } from './users/listusers/listusers.component';
import { LoginComponent } from './users//login/login.component';
import { RegisterComponent } from './users/register/register.component';

// Import routing modules
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

// Import Forms modules and do not forget motherf****** ReactiveFormsModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Calendar1Module } from '../calendar/calendar1.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Calendar1Module
  ],
  declarations: [
    ListusersComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
],
    exports: [CoreRoutingModule, HeaderComponent]
})
export class CoreModule { }

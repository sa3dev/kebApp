import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { ListusersComponent } from './users/listusers/listusers.component';
import { LoginComponent } from './users//login/login.component';
import { RegisterComponent } from './users/register/register.component';

// Import routing modules
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule
  ],
  declarations: [
    ListusersComponent,
    LoginComponent,
    RegisterComponent],
    exports: [CoreRoutingModule]
})
export class CoreModule { }

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



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ListusersComponent,
    LoginComponent,
    RegisterComponent],
    exports: [CoreRoutingModule]
})
export class CoreModule { }

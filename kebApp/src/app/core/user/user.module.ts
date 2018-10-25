import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './component/admin-user/admin-user.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminUserComponent, LoginComponent, RegisterComponent]
})
export class UserModule { }

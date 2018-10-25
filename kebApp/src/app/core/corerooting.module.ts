import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './user/component/login/login.component';

import {RegisterComponent} from './user/component/register/register.component';
const routes:Routes=[
  {
    path:'',
    redirectTo:'register',
    pathMatch: 'full',

  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }

];
@NgModule({
  	imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class CorerootingModule { }

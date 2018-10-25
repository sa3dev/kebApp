import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './user/component/login/login.component';

import { RegisterComponent} from './user/component/register/register.component';
import { UserService } from './user/user.service';
import { AdminUserComponent } from './user/component/admin-user/admin-user.component';



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
	,
	{	
		path:'admin',
		component: 	AdminUserComponent,
		canActivate:[UserService],
	}
];
@NgModule({
  	imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class CorerootingModule { }

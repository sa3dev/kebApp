import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,  ReactiveFormsModule  } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CorerootingModule} from './corerooting.module';
import {LoginComponent} from './user/component/login/login.component';
import {RegisterComponent} from './user/component/register/register.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule ,  
    ReactiveFormsModule,
    CorerootingModule
	],
	exports: [RouterModule],
	declarations: [LoginComponent, RegisterComponent]

})
export class CoreModule { }

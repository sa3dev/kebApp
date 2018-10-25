import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,  ReactiveFormsModule  } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CorerootingModule} from './corerooting.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule ,  
    ReactiveFormsModule,
    CorerootingModule
	],
	exports: [RouterModule],
	declarations: []

})
export class CoreModule { }

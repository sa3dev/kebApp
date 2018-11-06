import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path:'inventaire',
		loadChildren:'./../stock.module/#StockModule'
	}
]

@NgModule({
	imports: [
		CommonModule
	],
		declarations: [  ]
})
export class StockRoutingModule { }

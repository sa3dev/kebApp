import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StockComponent } from './stock.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  exports: [ RouterModule ],
  declarations: [ StockComponent ]
})
export class StockModule { }

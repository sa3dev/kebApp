import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StockComponent } from './stock.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  exports: [ RouterModule ],
  declarations: [ StockComponent , DetailStockComponent]
})
export class StockModule { }

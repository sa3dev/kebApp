import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Component 
import { StockComponent } from './stock.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [ RouterModule ],
  declarations: [ StockComponent , DetailStockComponent, AddProductComponent ]
})
export class StockModule { }

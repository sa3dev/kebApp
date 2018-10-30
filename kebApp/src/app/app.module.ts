import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ProductsService } from './core/products/products.service';
// import { StockComponent } from './stock/stock.component';
// import { MasterStockComponent } from './stock/master-stock/master-stock.component';
// import { DetailStockComponent } from './stock/detail-stock/detail-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    // StockComponent,
    // MasterStockComponent,
    // DetailStockComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

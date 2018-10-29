import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ProductsService } from './core/products/products.service';
import { RestaurantmenuComponent } from './restaurantmenu/restaurantmenu.component';
import { PricePipe } from './shared/pipe-price.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RestaurantmenuComponent,
    PricePipe
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

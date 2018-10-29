import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantmenuComponent } from './restaurantmenu.component';
import { PricePipe } from '../shared/pipe-price.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestaurantmenuComponent, PricePipe]
})
export class RestaurantmenuModule { }

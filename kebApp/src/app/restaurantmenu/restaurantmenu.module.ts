import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantmenuComponent } from './restaurantmenu.component';
import { PricePipe } from '../shared/pipe-price.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DndModule} from 'ng2-dnd';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DndModule.forRoot()
  ],
  declarations: [RestaurantmenuComponent, PricePipe]
})
export class RestaurantmenuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantmenuComponent } from './restaurantmenu.component';
import { PricePipe } from '../shared/pipe-price.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { AddmenuComponent } from './addmenu/addmenu.component';


// import Angular Material
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RestaurantmenuRoutingModule } from './restaurantmenu-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DndModule.forRoot(),
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RestaurantmenuRoutingModule
  ],
  declarations: [RestaurantmenuComponent, AddmenuComponent, PricePipe],
  exports: [RouterModule, FormsModule, AddmenuComponent,RestaurantmenuComponent]
})
export class RestaurantmenuModule { }

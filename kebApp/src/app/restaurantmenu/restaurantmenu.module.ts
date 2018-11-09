import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantmenuComponent } from './restaurantmenu.component';
import { PricePipe } from '../shared/pipe-price.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { AddmenuComponent } from './addmenu/addmenu.component';


// import Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DndModule.forRoot(),
    BrowserAnimationsModule,
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
    MatMenuModule
  ],
  declarations: [RestaurantmenuComponent, AddmenuComponent, PricePipe]
})
export class RestaurantmenuModule { }

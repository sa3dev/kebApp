import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { ListusersComponent } from './users/listusers/listusers.component';
import { LoginComponent } from './users//login/login.component';
import { RegisterComponent } from './users/register/register.component';

// Import routing modules
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

// Import Forms modules and other services but do not forget f****** ReactiveFormsModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule } from '../calendar/calendar.module';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { RestaurantmenuModule } from '../restaurantmenu/restaurantmenu.module';

//import stocok Module
import { StockModule} from '../stock/stock.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    
    StockModule,
    RestaurantmenuModule

  ],
  declarations: [
    ListusersComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProductsComponent
    
],
    exports: [CoreRoutingModule, HeaderComponent]
})
export class CoreModule { }

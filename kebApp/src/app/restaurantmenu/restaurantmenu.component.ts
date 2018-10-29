import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { RestaurantmenuService } from './restaurantmenu.service';
import { PricePipe } from '../shared/pipe-price.pipe';



@Component({
  selector: 'app-restaurantmenu',
  templateUrl: './restaurantmenu.component.html',
  styleUrls: ['./restaurantmenu.component.scss']
})
export class RestaurantmenuComponent implements OnInit {

  constructor(private restaurantservice:RestaurantmenuService) { }

  menus:Menu[]

  ngOnInit() {
    this.getListMenus()
  }

  getListMenus(){
    this.restaurantservice.getListMenus().subscribe(data => this.menus = data);
  }
}

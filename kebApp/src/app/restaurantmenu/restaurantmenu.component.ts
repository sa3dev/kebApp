import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { RestaurantmenuService } from './restaurantmenu.service';
import { PricePipe } from '../shared/pipe-price.pipe';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-restaurantmenu',
  templateUrl: './restaurantmenu.component.html',
  styleUrls: ['./restaurantmenu.component.scss']
})
export class RestaurantmenuComponent implements OnInit {

  displayingAddMenu:boolean = false;
  public menuName: FormControl;
  public costPriceMenu: FormControl;
  public sellPriceMenu: FormControl;
  public ingredientsMenu: FormControl;
  public addMenuForm: FormGroup;

  constructor(private restaurantservice:RestaurantmenuService, private fb:FormBuilder) { }

  menus:Menu[]

  ngOnInit() {
    this.menuName = this.fb.control('', Validators.required);
    this.costPriceMenu = this.fb.control('', Validators.required);
    this.sellPriceMenu = this.fb.control('', Validators.required);
    this.ingredientsMenu = this.fb.control('', Validators.required);
    this.addMenuForm = this.fb.group({
      menuName: this.menuName,
      costPriceMenu: this.costPriceMenu,
      sellPriceMenu: this.sellPriceMenu,
      ingredientsMenu: this.ingredientsMenu,
    })
    this.getListMenus();
  }

  getListMenus(){
    this.restaurantservice.getListMenus().subscribe(data => this.menus = data);
  }

  displayAddMenu(){
    if(this.displayingAddMenu == false){
      this.displayingAddMenu = true;
    } else if (this.displayingAddMenu){
      this.displayingAddMenu = false;
    }
  }
  
  addMenu(){
    const newMenu = new Menu();
    newMenu.costPrice = +this.costPriceMenu.value * 100;
    newMenu.sellPrice = +this.sellPriceMenu.value * 100;
    newMenu.name = this.menuName.value;
    newMenu.ingredients = this.ingredientsMenu.value.split(",");
    this.restaurantservice.addNewMenu(newMenu);
  }

  deleteMenu(id){
    this.restaurantservice.deleteThisMenu(id);
  }
}

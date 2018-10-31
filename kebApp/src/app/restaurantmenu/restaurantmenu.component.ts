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
  private menuName: FormControl;
  private costPriceMenu: FormControl;
  private sellPriceMenu: FormControl;
  private ingredientsMenu: FormControl;
  private addMenuForm: FormGroup;

  private editArray:boolean[] = [];

  private listMenus: Menu[] = [];

  constructor(private restaurantservice:RestaurantmenuService, private fb:FormBuilder) { }

  menus:Menu[]

  ngOnInit() {
    // Get the menus
    this.getListMenus(); 
    // Init the form
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
    
    // Populate array with false (we don't want to display the edit inputs)
    for(var i = 0; i < this.listMenus.length; i++){
      this.editArray.push(false);
    }
  }

  getListMenus(){
    this.restaurantservice.getListMenus().subscribe(data => this.listMenus = data);
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

  editMenu(i){
    // on click to the edit button, the boolean at index i goes to true if false and vice versa to show/hide edit inputs
    if(this.editArray[i]){
      this.getListMenus();
      this.editArray[i]=false;
    }else{
      this.editArray[i]=true;
    }
  }

  addEdits(i){
    // on click validate button, we put the modified Menu object at the same place  
    console.log(this.listMenus[i]);
    this.restaurantservice.putNewMenu(this.listMenus[i]).subscribe(
      (data) => {this.editArray[i] = false},
      (error) => {console.log(error)}
    )
  }
}

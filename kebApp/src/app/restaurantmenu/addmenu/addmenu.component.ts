import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantmenuService } from '../restaurantmenu.service';
import { ProductsService } from 'src/app/core/products/products.service';
import { Menu } from '../menu.model';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/products/product.model';


@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent implements OnInit {

  constructor(private fb: FormBuilder, private restaurantservice: RestaurantmenuService, private productservice: ProductsService) { }

  private listIngredients: Product[];

  // We declare forms element
  private menuName: FormControl;
  private costPriceMenu: FormControl;
  private sellPriceMenu: FormControl;
  private ingredientsMenu: FormControl;
  private imgurl: FormControl;
  private addMenuForm: FormGroup;

  // The boolean to show or hide
  private displayingAddMenu: boolean = false;

  ngOnInit() {
    // 2. Init the form
    this.menuName = this.fb.control('', Validators.required);
    this.costPriceMenu = this.fb.control('', Validators.required);
    this.sellPriceMenu = this.fb.control('', Validators.required);
    this.ingredientsMenu = this.fb.control('', Validators.required);
    this.imgurl = this.fb.control('');

    this.addMenuForm = this.fb.group({
      menuName: this.menuName,
      costPriceMenu: this.costPriceMenu,
      sellPriceMenu: this.sellPriceMenu,
      ingredientsMenu: this.ingredientsMenu,
      imgurl: this.imgurl
    });
  }

  /**
 * Function used to handle the display of the interface allowing to add a menu to the database 
 */
  displayAddMenu() {
    if (this.displayingAddMenu == false) {
      this.displayingAddMenu = true;
      // Get the list of ingredients/products
      this.productservice.getProductsList().subscribe(data => this.listIngredients = data)

    } else if (this.displayingAddMenu) {
      this.displayingAddMenu = false;
    }
  }

  /**
 * Add a new Menu created inside the function by associating each property of the Menu model with those specified in the form. We make some operations to the right side of the assignement to keep it a number and a price in our format. 
 * Prices should be "coded" in cents but the user usually enters them as plain euros. Hence we use a pipe that converts our coded prices in cents to euros.
 */
  addMenu() {
    // We create the menu to send to the addNewMenu method
    const newMenu = new Menu();
    newMenu.costPrice = +this.costPriceMenu.value * 100;
    newMenu.sellPrice = +this.sellPriceMenu.value * 100;
    newMenu.name = this.menuName.value;
    newMenu.imgurl = this.imgurl.value;
    newMenu.ingredients = this.ingredientsMenu.value;
    // We send it, reset our input and hide the interface to add a menu
    // console.log(newMenu.ingredients);
    console.log(this.ingredientsMenu.value);
    this.restaurantservice.addNewMenu(newMenu);
    // this.resetInput();
    // this.displayingAddMenu = false;
  }

  /**
 * Reset the inputs added by the user so s.he doesn't have to erase all by himself 
 */
  resetInput() {
    this.addMenuForm.reset();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu } from './menu.model';
import { RestaurantmenuService } from './restaurantmenu.service';
import { PricePipe } from '../shared/pipe-price.pipe';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { ProductsService } from '../core/products/products.service';
import { Product } from '../core/products/product.model';
import { Observable, Subscription } from 'rxjs';






@Component({
  selector: 'app-restaurantmenu',
  templateUrl: './restaurantmenu.component.html',
  styleUrls: ['./restaurantmenu.component.scss']
})
export class RestaurantmenuComponent implements OnInit {
  // The boolean to show or hide
  private displayingAddMenu: boolean = false;
  private editArray: boolean[] = [];

  // We declare forms element
  private menuName: FormControl;
  private costPriceMenu: FormControl;
  private sellPriceMenu: FormControl;
  private ingredientsMenu: FormControl;
  private addMenuForm: FormGroup;

  // Variable to dragData with DnD
  public dragData;
  simpleDrop: any = null;
  private draggingOk: boolean = true;

  // Variables to get and display list of menus and products which are considered as menus' ingredients
  public menuSubscription: Subscription;
  private listMenus: Menu[] = [];
  private listIngredients: Observable<Product[]>;

  constructor(private restaurantservice: RestaurantmenuService, private fb: FormBuilder, private productservice: ProductsService) { }
  /**
   * On init :
   * 1. We get the list of menus by subscribing to the subject defined in the restaurantmenu.service.ts. We store the recieved data in our listMenus.
   * 2. We init the form
   * 3. We make sure each edit input is hidden by populating the array responsible for their display with enough false (x false for x menus in listMenus)
   */
  ngOnInit() {
    // 1. Get the menus
    this.restaurantservice.getListMenus();
    this.menuSubscription = this.restaurantservice.menusSubject.subscribe(
      data => this.listMenus = data,
      error => console.log(error)
    )

    // 2. Init the form
    this.menuName = this.fb.control('', Validators.required);
    this.costPriceMenu = this.fb.control('', Validators.required);
    this.sellPriceMenu = this.fb.control('', Validators.required);
    this.ingredientsMenu = this.fb.control('', Validators.required);
    this.addMenuForm = this.fb.group({
      menuName: this.menuName,
      costPriceMenu: this.costPriceMenu,
      sellPriceMenu: this.sellPriceMenu,
      ingredientsMenu: this.ingredientsMenu,
    });

    // 3. Populate array with false (we don't want to display the edit inputs)
    for (var i = 0; i < this.listMenus.length; i++) {
      this.editArray.push(false);
    }
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
  }
  /**
   * Called when the drop on the dropzone is successful to delete the menu dropped by using its id.
   * @param event 
   */
  deleteDnd(event) {
    const id = event.dragData;
    console.log(id);
    this.restaurantservice.deleteThisMenu(id);
    this.restaurantservice.getListMenus();
  }
  /**
   * Function used to handle the display of the interface allowing to add a menu to the database 
   */
  displayAddMenu() {
    if (this.displayingAddMenu == false) {
      this.displayingAddMenu = true;
      // Get the list of ingredients/products
      this.listIngredients = this.productservice.getProductsList()

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
    newMenu.ingredients = this.ingredientsMenu.value;
    // We send it, reset our input and hide the interface to add a menu
    this.restaurantservice.addNewMenu(newMenu);
    this.resetInput();
    this.displayingAddMenu = false;
  }
  /**
   * Delete the menu with specified id.
   * @param id id of the menu to delete
   */
  deleteMenu(id) {
    this.restaurantservice.deleteThisMenu(id);
  }
  /**
   * On click to the edit button, the boolean at index i goes to true if false and vice versa to show/hide edit inputs. 
   * We apply the same logic to show/hide the drag'n drop while editing. Otherwise, user would be able to use the mouse to navigate throught the input field.
   * @param i the menu's index from the for loop that needs to display the edit actions
   */
  editMenu(i) {
    if (this.editArray[i]) {
      this.restaurantservice.getListMenus();
      this.editArray[i] = false;
      this.draggingOk = true;
    } else {
      this.editArray[i] = true;
      this.draggingOk = false;
    }
  }

  /**
   * Reset the inputs added by the user so s.he doesn't have to erase all by himself 
   */
  resetInput() {
    this.addMenuForm.reset();
  }
  /**
   * On click validate button, we put the modified Menu object at the same place  
   * @param menu the menu to add
   * @param i the index of the menu to modify
   */
  addEdits(menu, i) {
    console.log(menu);
    this.restaurantservice.putNewMenu(menu).subscribe(
      (data) => { this.editArray[i] = false },
      (error) => { console.log(error) }
    );
  }

}

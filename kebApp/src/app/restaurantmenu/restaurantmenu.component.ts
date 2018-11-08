import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu } from './menu.model';
import { RestaurantmenuService } from './restaurantmenu.service';
import { PricePipe } from '../shared/pipe-price.pipe';
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
  private editArray: boolean[] = [];

  // Variable to dragData with DnD
  public dragData;
  simpleDrop: any = null;
  private draggingOk: boolean = true;

  // Variables to get and display list of menus and products which are considered as menus' ingredients
  public menuSubscription: Subscription;
  private listMenus: Menu[] = [];
  private listIngredients: Observable<Product[]>;

  constructor(private restaurantservice: RestaurantmenuService, private produitservice: ProductsService) { }

  /**
   * On init :
   * 1. We get the list of menus by subscribing to the subject defined in the restaurantmenu.service.ts. We store the recieved data in our listMenus.
   * 2. We make sure each edit input is hidden by populating the array responsible for their display with enough false (x false for x menus in listMenus)
   */
  ngOnInit() {
    // 1. Get the menus
    this.restaurantservice.getListMenus();
    this.menuSubscription = this.restaurantservice.menusSubject.subscribe(
      data => { this.listMenus = data; },
      error => console.log(error)
    )
    // ... and ingredients for the edit menu
    this.listIngredients = this.produitservice.getProductsList()

    // 2. Populate array with false (we don't want to display the edit inputs)
    for (var i = 0; i < this.listMenus.length; i++) {
      this.editArray.push(false);
    }
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
  }

  /**
   * Called when the drop on the dropzone is successful to delete the menu dropped by using its id. 
   * Note : the function is only consoleloging the id of the menu we would seen deleted for this feature was useless 
   * (there 's already a delete button much easier to use).
   * @param event 
   */
  deleteMenuOnDnd(event) {
    const id = event.dragData;
    console.log(id);
    // this.restaurantservice.deleteThisMenu(id);
    // this.restaurantservice.getListMenus();
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
   * On click validate button, we put the modified Menu object at the same place  
   * @param menu the menu to add
   * @param i the index of the menu to modify
   */
  addEdits(menu, i) {
    console.log(menu.ingredients)
    this.restaurantservice.putNewMenu(menu).subscribe(
      (data) => { console.log(data); this.editArray[i] = false },
      (error) => { console.log(error) }
    );
  }

  log(event) {
    console.log(event);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu.model';
import { apiURLMenus } from '../config';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantmenuService {

  constructor(private http:HttpClient) { }

  menusSubject = new Subject<Menu[]>();
  menus:Menu[] = [];

  /**
   * Get call to which we subscribe to send to our menusSubject the value returned by our get. 
   */
  getListMenus(){
    this.http.get<Menu[]>(apiURLMenus).subscribe(
      data => {this.emitMenus(data)},
      error => console.log(error)
    )
  }

  /**
   * Function used to .next an Menu[] to menusSubject
   * @param data array of Menu send to our menusSubject
   */
  emitMenus(data:Menu[]){
    this.menusSubject.next(data);
  }

  /**
   * Add a new menu to the api
   * @param newmenu new menu created within the restaurantmenu.component's addMenu()
   */
  addNewMenu(newmenu:Menu){
    this.http.post(apiURLMenus, newmenu).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.getListMenus();
      },
      error => {
        console.log("Rrror in the addNewMenu function", error);
      }
    );
  }

  /**
   * Delete method to... delete a menu. We add a this.getListMenus() to refresh the list of menus after the delete has been a success. 
   * @param id id of the menu to delete 
   */
  deleteThisMenu(id){
    const url = apiURLMenus + id;
    this.http.delete(url)
      .subscribe(data => {
        console.log("Successful delete", data);
        this.getListMenus();
      },
        error => {
        console.log("Error in the deleteThisMenu function", error);
      }
    );
  }

  /**
   * Simple method that put the updated menu at the previous place in the BDD (via url).
   * @param menu menu to patch
   */
  putNewMenu(menu:Menu){
    var url = apiURLMenus + menu.id;
    return this.http.put(url, menu)
  }

}

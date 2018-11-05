import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu.model';
import { apiURLMenus } from '../config';

@Injectable({
  providedIn: 'root'
})
export class RestaurantmenuService {

  constructor(private http:HttpClient) { }

  getListMenus(){
    return this.http.get<Menu[]>(apiURLMenus)
  }

  /**
   * Add a new menu to the api
   * @param newmenu new menu created within the restaurantmenu.component's addMenu()
   */

  addNewMenu(newmenu:Menu){
    this.http.post(apiURLMenus, newmenu).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Rrror in the addNewMenu function", error);
      }
    );
  }

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

  putNewMenu(menu:Menu){
    var url = apiURLMenus + menu.id;
    return this.http.put(url, menu)
  }

}

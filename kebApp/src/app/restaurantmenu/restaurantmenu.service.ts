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


  getListMenus(){
    this.http.get<Menu[]>(apiURLMenus).subscribe(
      data => {this.emitMenus(data)},
      error => console.log(error)
    )
  }

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

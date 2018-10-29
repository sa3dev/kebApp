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
}

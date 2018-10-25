import { Injectable } from '@angular/core';
// import for API calls
import { HttpClient, HttpParams } from '@angular/common/http';
import {apiURL} from '../../../config';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,) { }

  logUser(){


    this.http.get('url')
  }
}

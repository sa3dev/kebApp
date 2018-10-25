import { Injectable } from '@angular/core';
import { apiURL } from '../../../config';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }
  createUser(user: User) {
    this.httpClient.post(apiURL,
      user)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.router.navigate(['login'])
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }
}




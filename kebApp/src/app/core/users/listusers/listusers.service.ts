import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../../../config';
import { User } from '../user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListusersService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getListUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(apiURL)
  }




  putUser(user: User) {
    const url = `${apiURL}/${user.id}`;
    this.httpClient.put(url,
      user)
      .subscribe(
        data => {
          console.log("PUT Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }

  postUser(user: User) {
    this.httpClient.post(apiURL,
      user)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }

  deleteUser(id: number): void {
    const url = `${apiURL}/${id}`;
    this.httpClient.delete(url)
      .subscribe(data => {
        console.log("voila tu sautes", data)
      },
        error => {
        console.log("Rrror", error);
      }
      );
  }
}

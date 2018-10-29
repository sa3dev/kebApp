import { Injectable } from '@angular/core';
import { apiURL } from '../../../config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }
  
  createUser(user: User) {


  /*createUser(user: User) {
>>>>>>> 4f1705a868ecaf36465b855f9e790ed034f270ea
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
  }*/

  getEmail(email):Observable<User[]>{
		const param={
			params:new HttpParams().set('email', email )
		}
		return this.httpClient.get<User[]>(apiURL, param);
	}
	getIdentifiant(identifiant):Observable<User[]>{
		const param={
			params:new HttpParams().set('nick_name', identifiant )
		}
		return this.httpClient.get<User[]>(apiURL, param);
	}
	verifDoublon(email, identifiant):Observable<User[]>{
		return forkJoin(
			this.getEmail(email),
			this.getIdentifiant(identifiant)
		).pipe(
			map(([usersEmail, usersIdentifiant])=>usersEmail=usersEmail.concat(usersIdentifiant)

			)
		)
	}
  createUser(user:User) {
  
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




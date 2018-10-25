import { Injectable } from '@angular/core';
import { HttpClient , HttpParams  } from '@angular/common/http';
import { User } from './user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const urlUser = "http://127.0.0.1:3000/users";

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private isIdentifier = false;

	constructor(
		private httpClient: HttpClient,
		private router: Router
	) { }

	/**
	 * Sa
	 * @param param1 first param of thue user, it can be firstname or email
	 * @param password 
	 * 
	 * log the user and redirect him in the application
	 * return redirection to the page admin 
	 */
	searchUser( param1: string , password: string ){
		const service = this;

		// we set a param if we found params for first_name or email  
		const params = param1 ? { params : new HttpParams().set( 'first_name' || 'email' , param1 ).set( 'password' , password ) } : { };
		
		const obser = this.httpClient.get<User[]>( urlUser, params ).subscribe( (data) => { 

			if( data.length === 1 ){

				service.isIdentifier = true
			}else{
				service.isIdentifier = false
			}
			// console.log('Redirection en cours ..');
			// console.log(service.isIdentifier);
			
			this.router.navigate(['./admin']);	
		},
			error => console.log(error)
		);
	}

	/**
	 *	Set the the boolean to let passe the user/admin and let use the correspondant service 
	 */
	canActivate(): boolean{
		return this.isIdentifier;
	}

	getAllUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(urlUser);
	}

	delete( id: number ){

		let url = `${urlUser}/${id}`;

		this.httpClient.delete(url).subscribe(
			
		);
	}
}

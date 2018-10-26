import { Injectable } from '@angular/core';
import { HttpClient , HttpParams  } from '@angular/common/http';
import { User } from './user.model';
<<<<<<< HEAD
import {Observable, forkJoin} from 'rxjs';
import { tap, map, concat } from 'rxjs/operators';


const urlUser= "http://127.0.0.1:3000/users";
=======
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const urlUser = "http://127.0.0.1:3000/users";

>>>>>>> 4ebda1bc7c886ace5d2d62c2bec4c2af37c9fbc6
@Injectable({
	providedIn: 'root'
})
export class UserService {
	private  tabUser:User[]=[];

<<<<<<< HEAD
	

	constructor(private httpclient:HttpClient) { }
=======
	private isIdentifier = false;

	constructor(
		private httpClient: HttpClient,
		private router: Router
	) { }
>>>>>>> 4ebda1bc7c886ace5d2d62c2bec4c2af37c9fbc6

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
	/**
	 * Léon
	 */
	/*verifNickname(nick_name):boolean{
		var bool=false;
	
		const paramName = 
		{
			params: new HttpParams().set('nick_name', nick_name)
		};
		this.httpclient.get<User[]>(urlUser, paramName).subscribe((data) =>
			{
				if(data.length===0){
					console.log("bien ouej pas de nick name");
					bool=true;
				}else{
					console.log("nick name existe deja");
				}
			},
			
				error=>console.log("erreur connection") 
			
			);
			
			
			return bool;
	}
	verifEmail(email):boolean{
		var bool=false;
		const param = 
			{
				params: new HttpParams().set('email', email)
			};
			this.httpclient.get<User[]>(urlUser, param).subscribe((data) =>
				{
					if(data.length===0){
					
						bool=true;
						console.log("bien ouej pas d'email miroir");
					}else{
						console.log("email existe deja");
					}
				},
				
					error=>console.log("erreur connection") 
				
				);
			return bool;
	}
	*/
	getEmail(email):Observable<User[]>{
		const param={
			params:new HttpParams().set('email', email )
		}
		return this.httpclient.get<User[]>(urlUser, param);
	}
	getIdentifiant(identifiant):Observable<User[]>{
		const param={
			params:new HttpParams().set('nick_name', identifiant )
		}
		return this.httpclient.get<User[]>(urlUser, param);
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

	postUser(user:User) {
  
		this.httpclient.post(urlUser,
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
	/**
	 * léon
	 */
	inscription(){
		/** const email=this.verifEmail(user.email);
		const nickName=this.verifNickname(user.nick_name);
		console.log(email);
		console.log(nickName);
		if((email)&&(nickName)){
			this.postUser(user);
		}else{
			console.log("erreur");
		}*/

	}

}

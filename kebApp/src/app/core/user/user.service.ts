import { Injectable } from '@angular/core';
import { HttpClient , HttpParams  } from '@angular/common/http';
import { User } from './user.model';
import {Observable, forkJoin} from 'rxjs';
import { tap, map, concat } from 'rxjs/operators';


const urlUser= "http://127.0.0.1:3000/users";
@Injectable({
	providedIn: 'root'
})
export class UserService {
	private  tabUser:User[]=[];

	

	constructor(private httpclient:HttpClient) { }

	/**
	 * 
	 * @param param1 first param of thue user, it can be firstname or email
	 * @param password 
	 * 
	 * log the user and redirect him in the application
	 */
	searchUser( param1: string , password: string ){

		const service = this;

		//const param = param1 ? {  };
		return
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

import { Injectable } from '@angular/core';
import { HttpClient , HttpParams  } from '@angular/common/http';



@Injectable({
	providedIn: 'root'
})
export class UserService {



	constructor() { }

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
}

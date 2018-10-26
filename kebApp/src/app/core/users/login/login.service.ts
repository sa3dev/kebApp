import { Injectable } from '@angular/core';
// Import for API calls
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiURL } from '../../../config';
import { Observable } from 'rxjs';
import { User } from '../user.model';
// Import the router to navigate
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  private isAuth: boolean = false;

  canActivate(){
    return this.isAuth;
  }

  logUser(username: string, password: string) {
    
    // We define the params to pass to the .get() in order to see if there is an entry in our API that fits the arguments passed to logUser(). Note that we only do that once we're assured that the user has at least entered a username in the appropriate field  
    const param = username ? { params: new HttpParams().set('nick_name', username).set('password', password) } : {}

    // We make a call to the API with the set parameters. If we get one and only one response (i.e only one user), then the function works smoothly and we can consider the user as logged. Then we return a true boolean to let the user access to the guarded route  
    this.http.get<User[]>(apiURL, param).subscribe(
      // If success, we check that there's only one user
      data => {
        if(data.length === 1){
          this.isAuth = true;
          this.router.navigate(['/users']);
        }
        else {
          this.isAuth = false;
        }
      }, 
      // If error, we keep isAuth to false and log the error
      (error) => {this.isAuth = false ; console.log("Error during login : " + error)}
    );
  }
  
}

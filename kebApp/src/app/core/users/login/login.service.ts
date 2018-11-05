import { Injectable } from '@angular/core';
// Import for API calls
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiURL } from '../../../config';
import { User } from '../user.model';
// Import the router to navigate
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoginSubject = new BehaviorSubject<boolean>(false);
  private user:User;
  constructor(private http: HttpClient, private router: Router) { }

<<<<<<< HEAD
  canActivate(){
    
=======

  canActivate() {
>>>>>>> 06af3202ba1409256f82551e1ce23d81c1c9d750
    return this.isLoginSubject.asObservable();
  }
  
  logUser(username: string, password: string) {

    // We define the params to pass to the .get() in order to see if there is an entry in our API that fits the arguments passed to logUser(). Note that we only do that once we're assured that the user has at least entered a username in the appropriate field  
    const param = username ? { params: new HttpParams().set('nick_name', username).set('password', password) } : {}

    // We make a call to the API with the set parameters. If we get one and only one response (i.e only one user), then the function works smoothly and we can consider the user as logged. Then we return a true boolean to let the user access to the guarded route  
    this.http.get<User[]>(apiURL, param).subscribe(
      // If success, we check that there's only one user
      data => {
<<<<<<< HEAD
        if(data.length === 1){
        
=======
        if (data.length === 1) {
>>>>>>> 06af3202ba1409256f82551e1ce23d81c1c9d750
          this.isLoginSubject.next(true);
          this.router.navigate(['/users']);
        }
        else {
          this.isLoginSubject.next(false);
        }
      },
      // If error, we keep isAuth to false and log the error
      (error) => { this.isLoginSubject.next(false); console.log("Error during login : " + error) }
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject;
  }

  logOUt() {
    this.isLoginSubject.next(false);
    this.router.navigate(['/login']);
  }

}

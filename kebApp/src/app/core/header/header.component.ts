import { Component, OnInit } from '@angular/core';
import { LoginService } from '../users/login/login.service';
import { User } from '../users/user.model'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : User;
  thisUser: Observable<User> = this.loginService.isLoginSubject;


  constructor(public loginService:LoginService) { 
    loginService.isLoggedIn().subscribe((data) => this.isLoggedIn = data);

  }
  onLogOut(){
    this.loginService.logOUt();
  }

  ngOnInit() {
  }

}

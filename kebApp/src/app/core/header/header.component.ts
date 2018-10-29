import { Component, OnInit } from '@angular/core';
import { LoginService } from '../users/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Observable<boolean>;


  constructor(public loginService:LoginService) { 
    this.isLoggedIn = loginService.isLoggedIn();

  }
  onLogOut(){
    this.loginService.logOUt();
  }

  ngOnInit() {
  }

}

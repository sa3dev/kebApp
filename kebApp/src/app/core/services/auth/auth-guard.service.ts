import { Injectable } from '@angular/core';
import { LoginService } from '../../users/login/login.service';
import { CanActivate } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private loginService: LoginService) { }
  canActivate() {
    return this.loginService.isLoginSubject.value !== null ? true : false
  }
}

import { Component, OnInit } from '@angular/core';
// Import Forms modules
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
// Import router to navigate when the user is logged
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, private loginservice:LoginService) {}

  private usernameCtrl:FormControl;
  private passwordCtrl:FormControl;
  private loginForm:FormGroup;

  ngOnInit() {
    this.usernameCtrl = this.fb.control('', Validators.required);
    this.passwordCtrl = this.fb.control('', Validators.required);
    this.loginForm = this.fb.group(
      {
        username: this.usernameCtrl,
        password: this.passwordCtrl
      }
    );
  }

  login() {
    // We delegate the login method to logUser() method in login.service.ts
    this.loginservice.logUser(this.usernameCtrl.value, this.passwordCtrl.value);
  }
}

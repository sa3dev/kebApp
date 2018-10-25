import { Component, OnInit } from '@angular/core';
// Import Forms modules
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
// Import router to navigate when the user is logged
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router) { }

  private usernameCtrl:FormControl;
  private passwordCtrl:FormControl;
  private groupCtrl:FormGroup;

  ngOnInit() {
    this.usernameCtrl = this.fb.control('', Validators.required);
    this.usernameCtrl = this.fb.control('', Validators.required);
    this.groupCtrl = this.fb.group(
      {

      }
    );
  }

  login() {

  }
}

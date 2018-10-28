import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { User } from '../user.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public firstNameCtrl: FormControl;
  public lastNameCtrl: FormControl;
  public nickNameCtrl: FormControl;
  public emailCtrl: FormControl;
  public passwordCtrl: FormControl;
  public passwordCheckCtrl: FormControl;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService, ) { }

  ngOnInit() {
    this.firstNameCtrl = this.fb.control('', Validators.required);
    this.lastNameCtrl = this.fb.control('', Validators.required);
    this.nickNameCtrl = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.emailCtrl = this.fb.control('', Validators.email);
    this.passwordCtrl = this.fb.control('', [Validators.required, Validators.minLength(6)]);
    this.passwordCheckCtrl = this.fb.control('', Validators.required);
    this.loginForm = this.fb.group({
      firstName: this.firstNameCtrl,
      lastName: this.lastNameCtrl,
      nickName: this.nickNameCtrl,
      email: this.emailCtrl,
      password: this.passwordCtrl,
      passwordCheck: this.passwordCheckCtrl
    });
  }
  signup() {
    if (this.passwordCtrl.value === this.passwordCheckCtrl.value && this.loginForm.valid) {
      const user = new User();
      user.first_name = this.firstNameCtrl.value;
      user.last_name = this.lastNameCtrl.value;
      user.nick_name = this.nickNameCtrl.value;
      user.email = this.emailCtrl.value;
      user.password = this.passwordCtrl.value;
      this.registerService.createUser(user);
    }
  }
}



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private loginForm: FormGroup;
  private firtsName: FormControl;
  private lastName: FormControl;
  private identifiant: FormControl;
  private email: FormControl;
  private role: FormControl;
  private password: FormControl;
  private confirmPassword: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firtsName=this.fb.control('', Validators.required);
    this.lastName=this.fb.control('', Validators.required);
    this.identifiant=this.fb.control('', Validators.required);
    this.email=this.fb.control('', Validators.required);
    this.role=this.fb.control('', Validators.required);
    this.password=this.fb.control('', Validators.required);
    this.confirmPassword=this.fb.control('', Validators.required);

    this.loginForm=new FormGroup({
      'firtsName':this.firtsName,
      'lastName':this.lastName,
      'identifiant':this.identifiant,
      'email':this.email,
      'role':this.role,
      'password':this.password,
      'confirmPassword':this.confirmPassword
    });
  }
  inscription(){
    console.log(this.firtsName.value);
    console.log(this.lastName.value);
    console.log(this.identifiant.value);
    console.log(this.email.value);
    console.log(this.role.value);
    console.log(this.password.value);
    console.log(this.confirmPassword.value);
    
  }

}

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
  public boolEmail:boolean;
  public boolIdentifiant:boolean;
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService, ) { }

  ngOnInit() {
    this.boolEmail=false;
    this.boolIdentifiant=false;
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
    console.log("ici");
    if (this.passwordCtrl.value === this.passwordCheckCtrl.value && this.loginForm.valid) {
      const user = new User();
      user.first_name = this.firstNameCtrl.value;
      user.last_name = this.lastNameCtrl.value;
      user.nick_name = this.nickNameCtrl.value;
      user.email = this.emailCtrl.value;
      user.password = this.passwordCtrl.value;
      this.boolEmail=false;
      this.boolIdentifiant=false;
      this.registerService.verifDoublon(user.email, user.nick_name).subscribe(
        (data:User[])=>{
          if(data.length>0){
            for(let dataUser of data){
              if(dataUser.email===user.email){
                this.boolEmail=true;
                
              }
              if(dataUser.nick_name===user.nick_name){
                this.boolIdentifiant=true;
                
              }
            }
            console.log("nop");
          }else{
            //if(this.confirmPassword.value===this.password.value){
              
              this.registerService.createUser(user);
             // this.valide=true;
            /*}else{
              this.boolMdp=true;
             
            }*/
          }
        },
        (error)=>{
          console.log(error);
        }
        );
      //this.registerService.createUser(user);
    }
  }
}



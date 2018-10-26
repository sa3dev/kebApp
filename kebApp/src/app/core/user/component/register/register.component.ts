import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../user.model';
import { UserService } from '../../user.service';
import {Observable, of} from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
/**
 * component register
 */
export class RegisterComponent implements OnInit {
  private loginForm: FormGroup;
  private firtsName: FormControl;
  private lastName: FormControl;
  private identifiant: FormControl;
  private email: FormControl;
  private role: FormControl;
  private password: FormControl;
  private confirmPassword: FormControl;
  private boolEmail=false;
  private boolIdentifiant=false;
  private boolMdp=false;
  private valide=false;
  
  constructor(private fb: FormBuilder, private service:UserService) { }

  /**
   * Init control and login form
   */
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
  /**
   * inscription of user
   */
  register(){
    let user =new User(this.firtsName.value, this.lastName.value,this.identifiant.value,this.email.value,this.password.value,this.role.value);
   this.boolEmail=false;
   this.boolIdentifiant=false;
   this.boolMdp=false;
   this.valide=false;
    this.service.verifDoublon(this.email.value, this.identifiant.value).subscribe(
      (data:User[])=>{
        if(data.length>0){
          for(let user of data){
            if(user.email===this.email.value){
              this.boolEmail=true;
              
            }
            if(user.nick_name===this.identifiant.value){
              this.boolIdentifiant=true;
              
            }
          }
        }else{
          if(this.confirmPassword.value===this.password.value){
            
            this.service.postUser(user);
            this.valide=true;
          }else{
            this.boolMdp=true;
           
          }
          
          
        }
      },
      (error)=>{
        console.log(error);
      }
      );
        
    

  
    
  }

}

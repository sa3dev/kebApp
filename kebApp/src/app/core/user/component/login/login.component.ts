import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private loginForm: FormGroup;
	private firstnameForm: FormControl;
	private passForm: FormControl;

	constructor(   
		private fbuilder: FormBuilder,
		private userService: UserService
	) { }
	
	/**
	 * Init the app
	 */
	ngOnInit() {
		this.firstnameForm = this.fbuilder.control('', Validators.required);
		this.passForm =  this.fbuilder.control('', Validators.required);

		this.loginForm = new FormGroup({
			'first_name': this.firstnameForm,
			'password' :  this.passForm
		});
	}

	/**
	 * Log the users in the application and redirect him to application
	 */
	login(){
		console.log( this.firstnameForm.value );
		console.log( this.passForm.value );
		//this.userService.searchUser(  )
	}	

	

}

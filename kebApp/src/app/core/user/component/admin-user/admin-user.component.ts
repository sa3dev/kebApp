import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service'; 
import { Observable , of} from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from '../../user.model';

const urlUser = "http://127.0.0.1:3000/users";

@Component({
	selector: 'app-admin-user',
	templateUrl: './admin-user.component.html',
	styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

	private ListUsers: Observable<User[]>;
	private isLoaded : boolean;

	constructor(
		private userService : UserService
	) { }

	ngOnInit() {
		this.getAllUser();
	}

	getAllUser(){

		this.isLoaded = false;
		this.ListUsers = this.userService.getAllUsers().pipe( finalize( () => this.isLoaded = true ) );
	}


	editer( id ){
		console.log("editer");
		console.log(id);
		
	}

	supprimer( id ){
		this.userService.delete(id);
	}
}

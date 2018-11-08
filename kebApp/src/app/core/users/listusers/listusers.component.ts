import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListusersService } from './listusers.service';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit, OnDestroy {

  users: User[]=[];
  usersSubscription: Subscription;
  private userEdit: Boolean[] = [];

  constructor(private listuserService: ListusersService) { }

  ngOnInit() {
    this.usersSubscription = this.listuserService.usersSubject.subscribe(
      (users: User[]) => {
        this.users = users;
        for (let i = 0; i < this.users.length; i++) {
          this.userEdit[i] = false;
      }
    }
    )
    this.listuserService.getListUsers();    
  }
  onDelete(id) {
    this.listuserService.deleteUser(id);
  }
  onEdit(i) {
    
    this.userEdit[i] === false ? this.userEdit[i] = true: this.userEdit[i] = false;
  }
  onUpdate(user, i:number) {
    
    this.listuserService.updateUser(user).subscribe(
      data => {
        console.log("PUT Request is successful ", data);
        this.userEdit[i]=false;
      },
      error => {
        console.log("Rrror", error);
    
      }
    );;
   
  }
  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}

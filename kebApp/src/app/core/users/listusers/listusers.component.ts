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

  constructor(private listuserService: ListusersService) { }

  ngOnInit() {
    this.usersSubscription = this.listuserService.usersSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
    this.listuserService.getListUsers();
  }

  onDelete(id) {
    this.listuserService.deleteUser(id);
  }
  onEdit(user) {

  }
  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}

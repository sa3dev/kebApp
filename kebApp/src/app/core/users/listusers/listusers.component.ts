import { Component, OnInit } from '@angular/core';
import { ListusersService } from './listusers.service';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {
  listUsers: User[];

  constructor(private listuserService: ListusersService) { }

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers():void {
    this.listuserService.getListUsers().subscribe(users => this.listUsers = users);
  }


  refresh(){    
    this.getListUsers();
  }
  onDelete(id) {
    this.listuserService.deleteUser(id)
    this.getListUsers();
  }
  onEdit(id) {

  }
}

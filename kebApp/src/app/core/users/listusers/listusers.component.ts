import { Component, OnInit } from '@angular/core';
import { ListusersService } from './listusers.service';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router'


@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {
  listUsers: User[];

  constructor(private listuserService: ListusersService,
    private router: Router) { }

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers():void {
    this.listuserService.getListUsers().subscribe(users => this.listUsers = users);
  }

  onEdit(id) {

  }
  refresh(){    
    this.getListUsers();
  }
  onDelete(id) {
    this.listuserService.deleteUser(id)
    this.router.navigate[('/register')]
  }
}

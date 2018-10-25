import { Component, OnInit } from '@angular/core';
import { ListusersService } from './listusers.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from '../user.model'

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {
  private listUsers: Observable<User[]>;
  private isLoaded: boolean;

  constructor(
    private listuserService: ListusersService,
  ) { }

  ngOnInit() {
    this.getListUsers();
  }
  getListUsers(): void {
    this.isLoaded = false;
    this.listUsers = this.listuserService.getListUsers().pipe(finalize(() => this.isLoaded = true));
    //this.isLoaded = true;
  }
  onDelete(id) {
    this.listuserService.deleteUser(id)
  }
}

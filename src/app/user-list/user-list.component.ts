import { Component, Input, OnInit } from '@angular/core';
import User from '../models/user.interface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users!: User[]
  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.users = this.userSrv.users
  }

}

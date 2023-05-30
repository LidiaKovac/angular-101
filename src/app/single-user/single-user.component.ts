import { Component, Input, OnInit } from '@angular/core';
import User from '../models/user.interface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  @Input() user!: User
  @Input() id!: number
  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
  }
  setStatus(status: string) {
    this.userSrv.updateUser(this.id, status)
  }
}

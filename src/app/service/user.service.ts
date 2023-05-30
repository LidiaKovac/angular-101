import { Injectable } from '@angular/core';
import User from "../models/user.interface"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = []
  constructor() {  // constructor is only used for external dependencies

  }
  createUser(name: string) {
    this.users.push({name, status: "busy" }) //this needs to respect the User interface
  }
  updateUser(id:number, status: string) {
    this.users[id].status = status
  }
}

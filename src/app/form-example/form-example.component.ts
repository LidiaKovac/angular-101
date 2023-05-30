import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {
  name!: string
  constructor(private userSrv: UserService) {
    //most of the times it will be private

  }

  ngOnInit(): void {
  }

  newUser(nome: string, event:SubmitEvent) {
    event.preventDefault()
    //this will be exectued onSubmit
    this.userSrv.createUser(nome) //will save new user in user service
    const target = event.target as HTMLFormElement
    target.reset()
    console.log(this.userSrv.users)
  }

}

import { UserService } from './../../../core/services/user.service';
import { User } from './../../../core/models/user.model';
import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User
  shownUser
  @Input() index: number

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.shownUser = {...this.user, status: this.user.validated === true ? 'valid' : 'invalid'}
  }

  validateUser() {
    this.userService.validateUser(this.index)
    console.log(typeof this.index)
   
  }

  validateUserRequest(){
    //console.log(this.user.id)
    this.userService.validateUserRequest(this.user.id)
  }

}

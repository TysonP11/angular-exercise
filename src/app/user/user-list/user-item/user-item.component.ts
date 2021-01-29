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

  constructor() { }

  ngOnInit(): void {
    this.shownUser = {...this.user, status: this.user.validated === true ? 'valid' : 'invalid'}
  }

  validateUser(id: number) {

  }

}

import { User } from './../../../core/models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User
  @Input() indexOfUser: string
  constructor() { }

  ngOnInit(): void {
  }

}

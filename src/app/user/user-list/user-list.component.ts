import { User } from './../../core/models/user.model';
import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewChecked {

  @Input() users : User[]; 
  formatedUsers = []

  constructor() { }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  ngOnInit(): void {
    this.formatedUsers = this.users.map((user) => {
      return {
        ...user,
        birthDay: this.formatDate(user.birthDay)
      }
    })
  }
  
  ngAfterViewChecked(){
    //console.log(this.users)
    this.formatedUsers = this.users.map((user) => {
      return {
        ...user,
        birthDay: this.formatDate(user.birthDay)
      }
    })
  }
}

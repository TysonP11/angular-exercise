import { User } from './../../../core/models/user.model';
import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit, AfterViewChecked {

  @Input() user: User
  @Input() indexOfUser: string
  birthday: string = ''
  constructor() { }

  ngOnInit(): void {
    this.birthday = this.formatDate(this.user.birthDay)
    console.log(this.birthday)
  }

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

  ngAfterViewChecked(){
    // console.log(this.formatDate(this.user.birthDay))
    // console.log(this.birthday)
  }
}

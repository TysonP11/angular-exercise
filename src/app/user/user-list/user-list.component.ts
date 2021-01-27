import { User } from 'src/app/core/models/user.model';
import { UserService } from './../../core/services/user.service';
import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() users : User[]; 
  //formatedUsers = []

  // formatDate(date) {
  //   var d = new Date(date),
  //       month = '' + (d.getMonth() + 1),
  //       day = '' + d.getDate(),
  //       year = d.getFullYear();

  //   if (month.length < 2) 
  //       month = '0' + month;
  //   if (day.length < 2) 
  //       day = '0' + day;

  //   return [year, month, day].join('-');
  // }

  // ngOnChanges(){
  //   this.formatedUsers = this.users.map((user) => {
  //     return {
  //       ...user,
  //       birthDay: this.formatDate(user.birthDay)
  //     }
  //   })
  // }
  
  // ngAfterViewChecked(){
  //   //console.log(this.users)
  //   this.formatedUsers = this.users.map((user) => {
  //     return {
  //       ...user,
  //       birthDay: this.formatDate(user.birthDay)
  //     }
  //   })
  // }
}

import { User } from 'src/app/core/models/user.model';
import { UserService } from './../../core/services/user.service';
import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  headers = ['name', 'age', 'birthDay', 'gender']
  selectedUsers : User[] = []
  users : User[]; 
  isFetching = false;
  
  viewingValidatedUsers = false

  constructor (private userService: UserService, private route: ActivatedRoute) {

  }

  containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return i;
        }
    }

    return -1;
}

  checked(user: User){
    if(this.containsObject(user, this.selectedUsers) === -1) {
      this.selectedUsers.push(user)
    }else{
      this.selectedUsers.splice(this.containsObject(user, this.selectedUsers), 1)
    }
  }

  validateUsers(){
    var i;
    for (i = 0; i < this.selectedUsers.length; i++) {
      this.userService.validateUserRequest(this.selectedUsers[i].id)
    }
  }

  ngOnInit() {
    this.viewingValidatedUsers = this.route.snapshot.routeConfig.path === "validated"

    if(this.viewingValidatedUsers) {
      this.isFetching = true;
      this.userService.fetchValidUsers().subscribe(
        users => {
          this.users = users
          
          this.isFetching = false
        }
      )
    } else {
      
      this.isFetching = true;
      this.userService.fetchInvalidUsers().subscribe(
        users => {
          this.users = users
          
          this.isFetching = false
        }
      )
      this.userService.usersChanged.subscribe(
        (event: any) => {
          this.userService.fetchInvalidUsers().subscribe(
            users => {
              this.users = users
              
              this.isFetching = false
            }
          )
        }
      )
    }
    
  }
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

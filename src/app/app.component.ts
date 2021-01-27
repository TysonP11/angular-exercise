import { UserService } from './core/services/user.service';
import { User } from './core/models/user.model';
import { Component, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odd-even-game';
  users : User[] = []

  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
    this.userService.usersChanged
      .subscribe(
        (users: User[]) => {
          this.users = users
        }
      )    
  }
  

}

import { User } from './core/models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odd-even-game';
  users : User[] = []

  onUserSubmit(newUser: User){
    this.users.push(newUser)
  }
}

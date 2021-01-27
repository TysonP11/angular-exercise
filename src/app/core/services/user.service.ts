import { User } from 'src/app/core/models/user.model';
import { EventEmitter, Injectable } from "@angular/core";

Injectable()
export class UserService {

    users : User[] = []
    usersChanged = new EventEmitter<User[]>()

    getUsers() {
        return this.users.slice()
    }

    addUser(user: User){
        this.users.push(user)
        this.usersChanged.emit(this.users.slice())
    }

    
}
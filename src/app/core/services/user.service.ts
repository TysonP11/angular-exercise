import { User } from 'src/app/core/models/user.model';
import { EventEmitter, Injectable } from "@angular/core";
import { users } from '../../shared/data/users'

Injectable()
export class UserService {

    users : User[] = users
    usersChanged = new EventEmitter<User>()

    getUsers() {
        return this.users.filter((user) => {
            return user.validated === false
        })
    }

    getValidatedUsers() {
        return this.users.filter((user) => {
            return user.validated === true
        })
    }

    validateUser(id: number) {
        for ( let i = 0; i < this.users.length; i++) {
            if (users[i].validated === false && i === id) {
                users[i].validated = true
            }
        }
        this.usersChanged.emit(this.users[0])
    }

    addUser(user: User){
        this.users.push(user)
        this.usersChanged.emit(user)
    }


}
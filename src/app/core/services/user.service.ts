import { User } from 'src/app/core/models/user.model';
import { EventEmitter, Injectable } from "@angular/core";
import { users } from '../../shared/data/users'
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable()
export class UserService {

    users : User[] = users
    usersChanged = new EventEmitter<User>()

    constructor( private http: HttpClient ) {}

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

    storeUser(user: User){
        this.http.post('https://angular-practice-c0bb9-default-rtdb.firebaseio.com/users.json', user,
        {
            observe: 'response'
        }).subscribe(
            responseData => {
              this.usersChanged.emit(user)
            }
          );
    }

    fetchUsers() {
        return this.http
            .get< { [key: string]: User }>(
                'https://angular-practice-c0bb9-default-rtdb.firebaseio.com/users.json'
            ).pipe(
                map(response => {
                    const usersArray: User[] = []
                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                          usersArray.push({ ...response[key], id: key });
                        }
                    }
                    return usersArray
                })
            )
    }


}
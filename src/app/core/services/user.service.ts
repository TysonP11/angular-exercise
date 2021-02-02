import { User } from 'src/app/core/models/user.model';
import { EventEmitter, Injectable } from "@angular/core";
import { users } from '../../shared/data/users'
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable()
export class UserService {

    users : User[] = users
    usersChanged = new EventEmitter<any>()

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
        this.usersChanged.emit(id)
    }

    validateUserRequest(id: string) {
        this.http.get(`https://angular-practice-c0bb9-default-rtdb.firebaseio.com/users/${id}.json`).subscribe(
            response => {
                this.http.put(`https://angular-practice-c0bb9-default-rtdb.firebaseio.com/users/${id}.json`, {...response, validated: true})
                    .subscribe(responseData => {
                        this.usersChanged.emit(responseData)
                    })
            }
        )
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

    fetchInvalidUsers() {
        return this.http
            .get< { [key: string]: User }>(
                'https://angular-practice-c0bb9-default-rtdb.firebaseio.com/users.json'
            ).pipe(
                map(response => {
                    console.log(response)
                    const usersArray: User[] = []
                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                            if(response[key].validated === false){
                                usersArray.push({ ...response[key], id: key });
                            }                          
                        }
                    }
                    return usersArray
                })
            )
    }
    fetchValidUsers() {
        return this.http
            .get< { [key: string]: User }>(
                'https://angular-practice-c0bb9-default-rtdb.firebaseio.com/users.json'
            ).pipe(
                map(response => {
                    console.log(response)
                    const usersArray: User[] = []
                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                            if(response[key].validated === true){
                                usersArray.push({ ...response[key], id: key });
                            }                          
                        }
                    }
                    return usersArray
                })
            )
    }


}
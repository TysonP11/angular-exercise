import { UserService } from './../../core/services/user.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  // @ViewChild('name') nameInput: ElementRef
  // @ViewChild('age') ageInput: ElementRef
  // @ViewChild('dob') dobInput: ElementRef
  // @ViewChild('gender') genderInput: ElementRef
  

  handleSubmit(newUser: NgForm){
    // const newUser = new User(this.nameInput.nativeElement.value, this.ageInput.nativeElement.value, this.dobInput.nativeElement.valueAsDate, this.genderInput.nativeElement.value)
    // const newUser = new User(this.userName, this.age, this.dob, this.gender)
    
    const birthDay = newUser.value.dob.split("-")
    const formatedBirthDay = new Date(birthDay[0], birthDay[1] - 1, birthDay[2])
    
    const formData = {...newUser.value, birthDay: formatedBirthDay}
    this.userService.addUser(formData)
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}

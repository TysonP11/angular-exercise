import { UserService } from './../../core/services/user.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserAddComponent implements OnInit {

  @ViewChild('name') nameInput: ElementRef
  @ViewChild('age') ageInput: ElementRef
  @ViewChild('dob') dobInput: ElementRef
  @ViewChild('gender') genderInput: ElementRef

  handleSubmit(){
    const newUser = new User(this.nameInput.nativeElement.value, this.ageInput.nativeElement.value, this.dobInput.nativeElement.valueAsDate, this.genderInput.nativeElement.value)
    this.userService.addUser(newUser)
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}

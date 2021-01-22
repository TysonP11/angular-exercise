import { User } from './../../core/models/user.model';
import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewChecked {

  @Input() users : User[]; 

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewChecked(){
    //console.log(this.users)
  }
}

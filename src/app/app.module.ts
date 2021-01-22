import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DropdownDirective } from './core/directives/dropdown.directive';
import { FormsModule } from '@angular/forms';
import { UserItemComponent } from './user/user-list/user-item/user-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserEditComponent,
    DropdownDirective,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

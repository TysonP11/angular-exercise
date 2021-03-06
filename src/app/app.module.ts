import { GenderPipe } from './core/pipes/gender.pipe';
import { UserService } from './core/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DropdownDirective } from './core/directives/dropdown.directive';
import { FormsModule } from '@angular/forms';
import { UserItemComponent } from './user/user-list/user-item/user-item.component';
import { UserStartComponent } from './user/user-start/user-start.component';
import { AppRoutingModule } from './core/routing/app-routing.module';
import { TableDataPipe } from './table-data.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserEditComponent,
    DropdownDirective,
    UserItemComponent,
    UserStartComponent,
    GenderPipe,
    TableDataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UserStartComponent } from './../../user/user-start/user-start.component';
import { UserListComponent } from './../../user/user-list/user-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from 'src/app/app.component';

const appRoutes: Routes = [
    { path: '', component: UserStartComponent },
    { path: 'validated', component: UserListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
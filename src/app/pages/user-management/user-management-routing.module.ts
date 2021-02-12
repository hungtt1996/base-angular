import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateUserComponent } from "./component/create-user/create-user.component";
import { UsersManagementComponent } from "./component/users-management/users-management.component";

const routes: Routes = [
  {
    path: '',
    component: UsersManagementComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}

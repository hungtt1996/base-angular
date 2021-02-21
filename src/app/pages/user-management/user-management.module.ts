import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserManagementRoutingModule} from './user-management-routing.module';
import {CreateUserComponent} from './component/create-user/create-user.component';
import {UsersManagementComponent} from './component/users-management/users-management.component';
import {SharedModule} from 'src/app/share/shared.module';

@NgModule({
    declarations: [CreateUserComponent, UsersManagementComponent],
    imports: [CommonModule, UserManagementRoutingModule, SharedModule],
})
export class UserManagementModule {
}

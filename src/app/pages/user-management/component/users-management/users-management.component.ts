import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-users-management',
    templateUrl: './users-management.component.html',
    styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent implements OnInit {
    users$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    searchForm = this.fb.group({
        fullname: [null, [Validators.required]],
        username: [null, [Validators.required]],
    });

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.initData();
    }

    initData(): void {
        console.log('On init data for user management >>>>>');
    }

    onSearch(): void {
        console.log(this.searchForm.value);
    }

    onCreate(): void {
        console.log('On create new user');
        // this.router.navigate(['/create']);
    }

    onEdit(): void {
        console.log('On edit user');
    }

    onDelete(): void {
        console.log('On delete user');
    }

    checkAllItems(event): void {
        console.log('Check all items >>>', event);
    }
}

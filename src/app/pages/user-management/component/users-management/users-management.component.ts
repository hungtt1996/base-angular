import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-users-management',
    templateUrl: './users-management.component.html',
    styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent implements OnInit {
    users$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    dropdownActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    position$: BehaviorSubject<{ xPosition: number, yPosition: number }> = new BehaviorSubject<{ xPosition: number, yPosition: number }>(null);

    //filter
    status = [
        {code: 'PENDING', value: 'Pending'},
        {code: 'REJECTED', value: 'Rejected'},
        {code: 'APPROVED', value: 'Approved'},
        {code: 'CANCEL', value: 'Cancel'}
    ];

    searchForm = this.fb.group({
        fullname: [null, [Validators.required]],
        username: [null, [Validators.required]],
    });

    statusForm = this.fb.group({
        statusArray: this.fb.array([])
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

    onTriggerMenu(event: MouseEvent, property: string): void {
        console.log('>>>> onclick ', event);
        if (property == 'role_code') {
            this.dropdownActive$.next(true);
            return;
        }
        this.dropdownActive$.next(false);
    }

    onCheckboxChange(event): void {
        console.log(event.target.value);
        const statusArray: FormArray = this.statusForm.get('statusArray') as FormArray;
        if (event.target.checked && !statusArray.value.includes(event.target.value)) {
            statusArray.push(new FormControl(event.target.value));
        } else if (!event.target.checked) {
            let i: number = 0;
            statusArray.controls.forEach((item: FormControl) => {
                if (item.value == event.target.value) {
                    statusArray.removeAt(i);
                    return;
                }
                i++;
            });
        }

        console.log(statusArray.value);

    }

    onShowPstatus(): void {
        setTimeout(() => {
            const statusArray: FormArray = this.statusForm.get('statusArray') as FormArray;
            console.log('on show pop over', statusArray);
            statusArray.value.forEach(status => {
                const ele = document.getElementById(status) as HTMLInputElement;
                ele.checked = true;
            });
        }, 50);
    }

    filterByStatus(source: string[]): void {

    }
}

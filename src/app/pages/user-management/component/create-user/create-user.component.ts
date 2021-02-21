import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

    createForm = this.fb.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required]],
        rePassword: [null, [Validators.required]],
        fullName: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
    });

    constructor(
        private fb: FormBuilder
    ) {
    }

    ngOnInit(): void {
    }

    back(): void {
        window.history.back();
    }

    onSubmit(): void {
        console.log(this.createForm.value);
    }

    /**
     * Check re type password does match with password
     * @param event
     */
    onBlurRePwd(event): void {
        if (this.createForm.get('rePassword').hasError('notMatch')) {
            delete this.createForm.get('rePassword').errors.notMatch;
        }
        const rePwd = event.target.value;
        const pwd = this.getValueByFormControlName('password');
        if (pwd) {
            if (pwd !== rePwd) {
                this.createForm.get('rePassword').setErrors({notMatch: true});
            }
        }
    }

    /**
     * Get value from input
     * @param keyName - Form Control Name
     */
    getValueByFormControlName(keyName: string): string {
        if (this.createForm.get(keyName)) {
            return this.createForm.get(keyName).value;
        }
        return null;
    }

}

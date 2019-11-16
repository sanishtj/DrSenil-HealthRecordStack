import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { LogIn } from '../state/auth.actions';



@Component({
  selector: 'hrs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  emailValidationMessage = '';
  passwordValidationMessage = '';
  user: User = new User();
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.userForm.get('username').statusChanges.subscribe(status => {
      if (status === 'INVALID' && this.userForm.controls.username.errors) {
        if (this.userForm.controls.username.errors.required) {
          this.emailValidationMessage = 'Please fill your email-id';
        } else if (this.userForm.controls.username.errors.email) {
          this.emailValidationMessage = 'Please fill a valid email id';
          }
      } else { this.emailValidationMessage = ''; }
    });

    this.userForm.get('password').statusChanges.subscribe(status => {
      if (status === 'INVALID' && this.userForm.controls.password.errors) {
        if (this.userForm.controls.password.errors.required) {
          this.passwordValidationMessage = 'Please fill password';
        }
      } else { this.passwordValidationMessage = ''; }
    });
  }

  onSubmit() {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }



}

import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormsModule
} from '@angular/forms';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { LogIn } from '../state/auth.actions';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'hrs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faLinkedin = faLinkedin;

  userForm: FormGroup;
  emailValidationMessage = '';
  passwordValidationMessage = '';
  user: User = new User();
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm);
    const payload = {
      email: this.userForm.controls.username.value,
      password: this.userForm.controls.password.value
    };
    this.store.dispatch(new LogIn(payload));
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }
}

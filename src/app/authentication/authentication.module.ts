import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from '../authentication/login/login.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule
  ]
})
export class AuthenticationModule { }

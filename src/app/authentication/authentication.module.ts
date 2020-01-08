import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from '../authentication/login/login.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature(
      [ AuthEffects ]
    ),
  ]
})
export class AuthenticationModule { }

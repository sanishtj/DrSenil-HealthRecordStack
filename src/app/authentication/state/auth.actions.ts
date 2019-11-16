import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGINSUCCESS = '[Auth] LoginSuccess',
  LOGINFAILIURE = '[Auth] LoginFailiure',
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: User) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGINSUCCESS;
  constructor(public payload: User) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGINFAILIURE;
  constructor(public payload: User) {}
}

export type AuthActions = LogIn | LogInSuccess | LoginFailure;



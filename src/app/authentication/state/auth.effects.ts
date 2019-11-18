import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

// import { ProductService } from '../product.service';
// import { Product } from '../product';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthenticationService,
    private actions$: Actions,
    private router: Router,
  ) {}

  @Effect()
  LogIn$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LOGIN),
    map((action: authActions.LogIn) => action.payload),
    mergeMap(payload =>
      this.authService.logIn(payload.email, payload.password).pipe(
        map(user => new authActions.LogInSuccess(user)),
        catchError(err => of(new authActions.LoginFailure(err)))
      )
    )
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LOGINSUCCESS),
    tap(user => {
      // localStorage.setItem("token", user.payload.token);
      this.router.navigateByUrl('/dashboard');
    })
  );
}

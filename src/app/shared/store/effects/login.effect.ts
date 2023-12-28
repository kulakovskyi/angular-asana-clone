import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {Router} from "@angular/router";
import {loginAction, loginFailureAction, loginSuccessAction} from "../actions/login.action";
import {catchError, map, of, switchMap, tap} from "rxjs";

import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../../pages/auth/servrices/auth.service";
import {UserResponseInterface} from "../../types/auth.interface";
import {Alert, AlertService} from "../../modules/alert/services/alert.service";


@Injectable()

export class LoginEffect{
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router,
              private alertService: AlertService) {
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: UserResponseInterface) => {
            this.alertService.success('Success login')
            localStorage.setItem('userEmail', currentUser.email)
            return loginSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.danger('Failure login')
            return of(
              loginFailureAction({errors: errorResponse.error})
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigate(['/board','-Nh25U4NruC2z8nTZNLf'])
        })
      ),
    {dispatch: false}
  )
}

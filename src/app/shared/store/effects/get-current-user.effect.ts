import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../actions/get-current-user.action";
import {UserResponseInterface} from "../../types/auth.interface";
import {AuthService} from "../../../pages/auth/servrices/auth.service";

@Injectable()

export class GetCurrentUserEffect{

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        return this.editService.getUserData().pipe(
          map((currentUser: UserResponseInterface) => {
            return getCurrentUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction())
          })
        )
      })
    )
  )
}

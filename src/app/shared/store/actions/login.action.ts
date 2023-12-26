import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {User, UserResponseInterface} from "../../types/auth.interface";

export const loginAction =
  createAction(ActionType.LOGIN, props<{ request: User }>()
  )

export const loginSuccessAction =
  createAction(ActionType.LOGIN_SUCCESS, props<{ currentUser: UserResponseInterface }>()
  )

export const loginFailureAction =
  createAction(ActionType.LOGIN_FAILURE, props<{ errors: any }>()
  )

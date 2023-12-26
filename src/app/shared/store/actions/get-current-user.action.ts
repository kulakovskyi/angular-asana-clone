import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {UserResponseInterface} from "../../types/auth.interface";

export const getCurrentUserAction =
  createAction(ActionType.GET_CURRENT_USER)

export const getCurrentUserSuccessAction =
  createAction(ActionType.GET_CURRENT_USER_SUCCESS,
    props<{ currentUser: UserResponseInterface }>()
  )

export const getCurrentUserFailureAction =
  createAction(ActionType.GET_CURRENT_USER_FAILURE)

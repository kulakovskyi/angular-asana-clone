import {AuthStateInterface} from "../types/auth-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {loginAction, loginFailureAction, loginSuccessAction} from "./actions/login.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: false,
  validationErrors: null
}

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      validationErrors: action.errors
    })
  ),

)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}

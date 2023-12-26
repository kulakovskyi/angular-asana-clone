import {UserResponseInterface} from "./auth.interface";


export interface AuthStateInterface {
  isSubmitting: boolean
  isLoading: boolean
  currentUser: UserResponseInterface | null
  isLoggedIn: boolean | null
  validationErrors:  any
}

export interface User {
  email: string | null
  password: string | null
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}


export interface FbCreateResponse {
  name?: string
}

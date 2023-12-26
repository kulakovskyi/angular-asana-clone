export interface User {
  email: string | null
  password: string | null
  returnSecureToken?: boolean
}

export interface UserResponseInterface{
  kind: string,
  localI: string,
  email: string,
  displayName: string,
  idToken: string,
  registered: boolean,
  refreshToken: string,
  expiresIn: string
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}


export interface FbCreateResponse {
  name?: string
}

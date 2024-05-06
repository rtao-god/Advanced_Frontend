export interface User {
  id: string
  identifier: string
  isAuthenticated: boolean
}

export interface UserSchema {
  authData?: User
}

import UserData from '@/shared/types/user.interface'
export type TUserDataForPutRequest = Partial<UserData>

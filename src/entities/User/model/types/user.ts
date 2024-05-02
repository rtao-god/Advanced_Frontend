export interface User {
  id: string
  identifier: string
}

export interface UserSchema {
  authData?: User
}

import { IUserData } from '@/shared/types/user.interface'
export type TUserDataForPutRequest = Partial<IUserData>

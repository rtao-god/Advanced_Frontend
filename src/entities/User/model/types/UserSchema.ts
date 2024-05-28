export interface User {
    id: number
    identifier: string
    password: string
    isAuthenticated: boolean
}

export interface UserSchema {
    authData?: User
}

import { UserData } from '@/shared/types/user.types'
export type TUserDataForPutRequest = Partial<UserData>

import { AxiosResponse } from 'axios'

import { instance } from '@/shared/config/axiosInstance/axiosInstance'
import { TGroups } from '@/shared/types/group.type'

export interface CreateUser {
  birthday: string
  number: string
  group: TGroups
  password1: string
  password2: string
  stage: 1
}

export async function registration(
  birthday: string,
  number: string,
  group: TGroups,
  password1: string,
  password2: string,
  stage: 1
): Promise<AxiosResponse<CreateUser>> {

  return instance.post('/users/', {
    birthday,
    number,
    password1,
    password2,
    group,
    stage,
  })
}

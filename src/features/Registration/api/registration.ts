import { AxiosResponse } from 'axios'

import { TGroups } from '@/shared/types/group.type'
import { instance } from '@/shared/config/axiosInstance/axiosInstance'

export interface ICreateUser {
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
): Promise<AxiosResponse<ICreateUser>> {

  return instance.post('/users/', {
    birthday,
    number,
    password1,
    password2,
    group,
    stage,
  })
}

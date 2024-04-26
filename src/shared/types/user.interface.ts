/* import { ICity } from './city.interface'
import { IClinic } from './clinic.interface'
import { ICountry } from './country.interface'
import { IDisease } from './disease.interface'
import { TGender } from './gender.type'
import { IGroup } from './group.type' */

export interface IUserData {
  id: number
  password: string
  last_login: Date
  is_required: boolean
  is_staff: boolean
//   sex: TGender
  number: string
  email: string
  first_name: string | null
  last_name: string | null
  surname: string | null
  birthday: string
  image: string
  address: null
  created_at: Date
  updated_at: Date
  verification_code: number
  reset_code: number
  email_verification_code: number
 /*  group: IGroup
  main_center: IClinic */
  clinic: null
  interest: null
/*   country: ICountry
  city: ICity
  centers: IClinic[]
  disease: IDisease[] | [] | number[] */
}

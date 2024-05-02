export type TGroups = 'Пользователи' | 'Администраторы' | 'Врачи'

export interface IGroup {
  id: number
  name: TGroups
  number_of_people: number
}

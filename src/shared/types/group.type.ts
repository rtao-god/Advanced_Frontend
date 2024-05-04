export type TGroups = 'Пользователи' | 'Администраторы' | 'Врачи'

export interface Group {
  id: number
  name: TGroups
  number_of_people: number
}

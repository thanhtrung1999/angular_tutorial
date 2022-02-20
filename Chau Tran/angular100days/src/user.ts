export enum GenderType {
  male = 'male',
  famale = 'famale'
}
export interface User {
  id: number,
  firstName: string,
  lastName: string,
  gender: GenderType,
  email?: string,
}

export const users: User[] = [
  {
    id: 1,
    firstName: 'Thanh',
    lastName: 'Trung',
    gender: GenderType.male,
    email: 'thanhtrung04011999@gmail.com'
  },
  {
    id: 2,
    firstName: 'Thu',
    lastName: 'Phuong',
    gender: GenderType.famale,
    email: 'buithuphuong0705@gmail.com'
  },
  {
    id: 3,
    firstName: 'Lan',
    lastName: 'Hanh',
    gender: GenderType.famale,
    email: 'lanhanh2509@gmail.com'
  },
]

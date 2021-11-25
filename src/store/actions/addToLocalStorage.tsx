import { Fields } from '../../components/FormBuilder/types'

export const addToLocalStorage = (param: Fields, type: string) => ({
  type: type,
  payload: param,
})

import { Fields } from '../../components/FormBuilder/types'

export const addToState = (param: Fields, type: string) => {
  return {
    type: type,
    payload: param,
  }
}

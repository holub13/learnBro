// import { AUTH_ADD_TO_STATE } from '../actionTypes/authActionTypes'
import { Fields } from '../../components/FormBuilder/types'

export const addToState = (param: Fields, type: string) => {
  return {
    type: type,
    payload: param,
  }
}

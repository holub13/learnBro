// import { AUTH_ADD_TO_LOCALSTORAGE } from '../actionTypes/authActionTypes'
// import { actionTypes } from '../actionTypes/authActionTypes'
import { Fields } from '../../components/FormBuilder/types'

export const addToLocalStorage = (param: Fields, type: string) => ({
  type: type,
  payload: param,
})

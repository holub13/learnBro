import { AUTH_ADD_TO_LOCALSTORAGE } from '../actionTypes/authActionTypes'
import { Fields } from '../../components/FormBuilder/types'

export const addToLocalStorage = (param: Fields) => ({
  type: AUTH_ADD_TO_LOCALSTORAGE,
  payload: param,
})

import { AUTH_ADD_TO_STATE } from '../actionTypes/authActionTypes'
import { Fields } from '../../components/Form/types'

export const addToState = (param: Fields) => {
  return {
    type: AUTH_ADD_TO_STATE,
    payload: param,
  }
}
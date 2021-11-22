import { AUTH_ADD_TO_LOCALSTORAGE } from '../actionTypes/authActionTypes'

export const addToLocalStorage = (param: any) => ({
  type: AUTH_ADD_TO_LOCALSTORAGE,
  payload: param,
})

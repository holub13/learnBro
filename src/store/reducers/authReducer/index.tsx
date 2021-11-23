import { initialState } from './initialState'

import { AuthType } from '../../types/authInterfaces'

const authReducer = (state = initialState, action: AuthType) => {
  switch (action.type) {
    case 'AUTH_ADD_TO_LOCALSTORAGE':
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...action.payload,
        })
      )
      return {
        ...state,
        ...action.payload,
      }
    case 'AUTH_ADD_TO_STATE':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default authReducer

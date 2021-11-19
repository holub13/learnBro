import { initialState } from './initialState'

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REGISTRATION_REQUEST':
      return {
        ...state,
        login: action.login,
        password: action.password,
        email: action.email,
      }
    default:
      return state
  }
}

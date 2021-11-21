import { initialState } from './initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REGISTRATION_REQUEST':
      return {
        ...state,
        login: action.login,
        email: action.email,
        password: action.password,
      }
    default:
      return state
  }
}

export default rootReducer

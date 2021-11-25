import { initialStateProducts } from './initialStateProducts'

import { AuthType } from '../../types/authInterfaces'

const peopleReducer = (state = initialStateProducts, action: AuthType) => {
  switch (action.type) {
    case 'ADD_TO_LOCALSTORAGE_PEOPLE':
      localStorage.setItem(
        'people',
        JSON.stringify({
          ...action.payload,
        })
      )
      return {
        ...state,
        ...action.payload,
      }
    case 'ADD_TO_STATE_PEOPLE':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default peopleReducer

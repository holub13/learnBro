import { initialStateStarships } from './initialStateStarshipss'

import { AuthType } from '../../types/authInterfaces'

const starshipsReducer = (state = initialStateStarships, action: AuthType) => {
  switch (action.type) {
    case 'ADD_TO_LOCALSTORAGE_STARSHIPS':
      localStorage.setItem(
        'starships',
        JSON.stringify({
          ...action.payload,
        })
      )
      return {
        ...state,
        ...action.payload,
      }
    case 'ADD_TO_STATE_STARSHIPS':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default starshipsReducer

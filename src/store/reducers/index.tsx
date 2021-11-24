import { combineReducers } from 'redux'
import authReducer from './authReducer'
import peopleReducer from './peopleReducer'
import starshipsReducer from './starshipsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  people: peopleReducer,
  starships: starshipsReducer,
})

export default rootReducer

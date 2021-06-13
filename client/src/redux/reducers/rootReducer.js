import { combineReducers } from 'redux'

import gameReducer from './gameReducer'

const createRootReducer = () => combineReducers({
  gameReducer
})

export default createRootReducer

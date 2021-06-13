import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './reducers/rootReducer.js'

const middleware = [thunk]
const initialState = {}

const composedEnch = compose(applyMiddleware(...middleware))

const store = createStore(createRootReducer(), initialState, composedEnch)

export default store

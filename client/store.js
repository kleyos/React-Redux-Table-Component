import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(logger, reduxThunk))

export default store

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(logger, reduxThunk))

// if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       const nextRootReducer = require('./reducers')
//       store.replaceReducer(nextRootReducer)
//     })
//   }

export default store

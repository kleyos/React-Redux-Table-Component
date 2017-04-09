import { combineReducers } from 'redux'

import data from './data'
import query from './query'
import block from './block'

const rootReducer = combineReducers({ block, data, query })

export default rootReducer

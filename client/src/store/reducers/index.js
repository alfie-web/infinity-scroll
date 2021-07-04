import { combineReducers } from 'redux'

import feedReducer from './feed'

const rootReducer = combineReducers({
  feed: feedReducer,
})

export default rootReducer

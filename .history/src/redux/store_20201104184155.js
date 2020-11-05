import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
//import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer'
import thunk from 'react-redux'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store

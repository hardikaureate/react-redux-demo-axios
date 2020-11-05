import { createStore, applyMiddleware } from 'redux'
import thunk from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
//import cakeReducer from './cake/cakeReducer'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store

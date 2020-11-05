import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer'

const store = createStore(cakeReducer)

export default store

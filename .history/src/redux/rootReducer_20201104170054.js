import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreameReducer from './IceCream/iceCreamReducer'
import iceCreamReducer from './IceCream/iceCreamReducer'


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer
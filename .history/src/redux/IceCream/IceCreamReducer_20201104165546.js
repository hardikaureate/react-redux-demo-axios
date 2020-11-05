import {BUY_ICECREAM, BUY_IceCream} from './IceCreamTypes'

const initialState = {
    numOfIceCreams: 20
}

const iceCreameReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}